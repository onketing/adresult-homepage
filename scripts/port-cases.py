#!/usr/bin/env python3
"""
adresult.kr 성공사례 게시판 글 → src/data/success-cases.ts 이식 스크립트.

사용법:
  1) python3 -m venv .venv && . .venv/bin/activate && pip install beautifulsoup4
  2) 아래 IDXS 배열에 이식할 글 idx를 "노출 순서대로" 넣는다. (맨 앞 = 목록 첫 글)
  3) python3 scripts/port-cases.py
  4) pnpm build 로 /cases, /cases/[slug] 생성 확인

동작:
  - 게시판 view 는 서버렌더 → curl(urllib)로 HTML 확보
  - 본문(.fr-view 안의 _comment_body)의 블록을 "문서 순서대로" 순회하며 파싱
  - 텍스트: run 단위로 색상/굵기/기울임/밑줄/줄바꿈 보존. <table> 콜아웃 텍스트도 동일 규칙으로 수집
  - 이미지: /upload/(cdn.imweb.me) + pstatic.net(네이버 postfiles) 모두 다운로드
      · /upload/ → Referer: adresult.kr / pstatic → Referer: blog.naver.com (naver 는 adresult referer 로 403)
      · public/images/cases/{idx}/ 로 저장(+sips 실측 크기). 다운로드 실패 시 로그 후 건너뜀(중단 안 함)
  - 영상: <iframe src=.../embed/{id}> (fr-video 래핑) + 유튜브 watch 링크 썸네일 → video 블록(문서 순서)
  - 제거(상세 페이지 공통 하단이 대체):
      · 유튜브 채널(@/channel/c) 링크 배너
      · <a href> 가 pf.kakao.com / map.naver.com / youtube 채널 로 향하는 배너 이미지
      · 가로로 넓은(비율≥2) 꼬리 프로모 배너
      · 추적/프로필/1x1 등 컨텐츠 아닌 이미지(=/upload/·pstatic 이 아닌 src)
  - og:title 과 같은 첫 블록(제목 중복) 제거
자세한 설명: docs/08-case-porting.md
"""
import json, os, re, subprocess, urllib.request
from bs4 import BeautifulSoup, NavigableString, Tag

try:  # 지각 해시(중복 이미지 제거용) — 없으면 중복 제거만 생략
    import imagehash as _imagehash
    from PIL import Image as _PILImage
except Exception:
    _imagehash = None
    _PILImage = None


def img_dhash(path):
    """이미지 지각 해시(dhash). imweb·naver 양쪽 업로드 등 시각적 동일 이미지 탐지용."""
    if _PILImage is None:
        return None
    try:
        return _imagehash.dhash(_PILImage.open(path), hash_size=12)
    except Exception:
        return None

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOARD = "https://adresult.kr/549265113/?bmode=view&t=board&idx="
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"

# ── 이식할 글 idx (추가/생성 순서대로 — 오래된 → 최신) ──
# 맨 뒤가 가장 최근에 추가한 글. 사이트에는 최신이 맨 앞에 노출되도록 출력 시 역순으로 뒤집는다.
# 새 글을 추가할 때는 이 배열의 "맨 끝"에 idx 를 붙이면 자동으로 목록 맨 앞에 노출된다.
IDXS = [
    "164425283",
    "164427329",
    "164429049",
    "166883724",
    "167070308",
    "167212324",
    "167232106",
    "167246130",
    "167246533",
    "167284802",
    "167296385",
    "167308882",
    "167309357",
    "167310045",
    "167311286",
    "167311629",
    "167324919",
    "167382065",
    "167382901",
    "167408277",
    "167431125",
    "167431321",
    "167449883",
]

# ── 카드 썸네일(cover) 지정 ──
# 기본값은 본문 "첫 이미지". 특정 글은 여기서 override 한다.
#   "last"  → 본문 마지막 이미지
#   정수 n  → 본문 n번째 이미지(1-based)
COVERS = {
    "164427329": "last",
    "167232106": 3,  # 3번 이미지 = 병원명 검색량 200→770 차트
    "167246533": 2,  # 1번은 칼럼 배너 → 2번(신환 증가 카톡 후기)으로
    "167310045": 2,  # 1번 카톡 → 2번(6→10월 내원수 15→51 성장표)
    "167311286": 2,  # 1번 곰 캐릭터 → 2번(300례 카톡)
    "167311629": 2,  # 1번 곰 캐릭터 → 2번(키워드 노출표)
}

# ── 이식 제외 이미지 — idx → 제외할 "본문 이미지 순번" 집합(1-based, 문서 순서) ──
# 제목이 박힌 표지형 디자인 배너처럼 사이트 레이아웃(h1·리드)과 중복되는 이미지를 뺀다.
DROP_IMAGES = {
    "167212324": {1, 2},  # 상단 naver 표지 2장(제목 중복) 제외
}

# ── 리드 콜아웃(핵심 요약, 수치 포함) — idx → 1~2문장 ──
# AEO: 이미지 속 핵심 수치를 텍스트로도 노출해 답변엔진/크롤러가 읽게 한다.
LEADS = {
    "164429049": "기존 대행사에서 성과를 못 본 B의원은 애드리절트로 옮긴 뒤, 인터넷 신규환자 35명에서 광고 3개월 만에 목표였던 70명을 넘어 최대 130명까지 늘었습니다.",
    "164427329": "수술 정형외과 D의원은 월 2,800~3,000만원을 파워링크에 쓰고도 환자가 늘지 않았습니다. 애드리절트는 파워링크를 끄고 검색 의도 기반 콘텐츠로 전환해 전년 동기 대비 환자를 30% 늘렸습니다.",
    "164425283": "개원 후 6개월간 월 1,000~1,500만원을 쓰고도 인터넷 신규환자가 0명이던 U정형외과는, 애드리절트와 함께한 뒤 월 신규환자 80명을 달성했습니다.",
    "166883724": "개원 후 1년간 월 1천만원 넘는 광고비를 쓰고도 인터넷 신규환자가 월 30명에 그치던 S치과는, 애드리절트의 세부키워드 전략으로 3개월 만에 3배 이상 늘었고 광고 4년 차에는 월 300명 이상으로 기존의 10배 이상을 달성했습니다.",
    "167070308": "지방에서 서울로 이전한 D의원은 애드리절트와 블로그 중심 콘텐츠·애자일 소통 전략으로, 병원명 검색량을 두 달 만에 200건대에서 770건으로 3배 이상 늘렸고 이후 월 2,000건까지 끌어올렸습니다.",
    "167212324": "개원 초 신규환자가 적고 근교에 대형 치과 오픈까지 앞둔 치과가, 애드리절트의 메디컬 패키지에 유튜브 광고·플레이스 상위노출·온라인 평판관리를 더한 결과 광고 6개월 만에 병원 확장까지 이뤘습니다.",
    "167232106": "타 지역에서 10년 운영하다 서울로 이전한 A병원은, 애드리절트와 함께한 두 달 만에 병원명 검색량이 200건대에서 770건으로 3배 이상 늘었고, 1년 4개월 뒤에는 월 2천 건 가까이로 약 10배까지 증가했습니다.",
    "167246130": "타 광고회사에서 옮겨온 A병원은 애드리절트와 3개월 진행한 뒤 이전 대비 60~70% 더 나은 효과를 봤다는 피드백을 주셨습니다. 애드리절트가 가장 반기는 말은 '환자가 늘었다'입니다.",
    "167246533": "병원마케팅 효과는 지역·분과·규모에 따라 다르지만, 메디컬 패키지를 이용한 대부분의 병원이 2~3개월이면 인터넷 유입이 생겼다고 말합니다. 애드리절트는 월 단위로 내원율을 함께 체크하며 광고를 조정합니다.",
    "167284802": "안과 광고를 다래끼·건조증 등 실제 검색 키워드에 맞춰 진행한 결과, 눈통증·이물감·눈충혈을 검색한 일반 환자 내원이 크게 늘었습니다. 키워드를 37개에서 101개로 확장하며 지역 검색 노출을 장악했습니다.",
    "167296385": "지인 소개로 시작한 한의원이 신도시 이전 후 신환 유입이 확실히 늘었습니다. 156개 세부 키워드로 노출도 80%를 점유하고 의료법을 지킨 콘텐츠로, 2019년부터 3년 넘게 함께하고 있습니다.",
    "167308882": "키워드 경쟁이 치열한 신경외과에서 세부 키워드 노출을 정비·유지하고 한발 앞서 제안하는 관리로, 원장님이 지인 원장 2분을 직접 소개할 만큼 만족한 사례입니다. 블로그·유튜브·방송에서 골고루 문의가 들어옵니다.",
    "167309357": "다른 광고사와 1년을 진행했던 수원 A병원이 애드리절트로 옮긴 뒤 3개월 만에 효과를 체감했습니다. 노출 키워드가 24개에서 94개로 늘며 환자가 60~70% 증가했고, 940만 원 상당의 노출을 인건비 수준 비용으로 확보했습니다.",
    "167310045": "부산 B정형외과는 애드리절트와 광고를 시작한 뒤 환자가 약 40% 늘었습니다. 광고 첫 달 15명이던 내원이 5개월 차에 51명으로 증가했고, 환자가 검색하는 수백 개 키워드에 병원이 노출되도록 관리했습니다.",
    "167311286": "2017년부터 함께한 A병원은 2022년 확장 이전 후 새 치료법 키워드에 집중해, 병원마케팅 8개월 만에 500례를 달성했습니다(6월 300례 → 10월 500례). 100개가 넘던 키워드를 350개까지 확장하며 매출이 지속 상승했습니다.",
    "167311629": "월 매출 5억 병원이 애드리절트 메디컬 패키지에 월 약 1,000만 원을 써서 ROAS 5000%를 기록한 사례입니다. 같은 노출을 파워링크로 만들면 키워드 10개만 세팅해도 월 2,200만 원이 드는데, 그 절반도 안 되는 비용으로 136개 중 82개(약 60%) 키워드를 노출하고 있습니다.",
    "167324919": "경쟁이 치열한 지역의 Y치과는 애드리절트와 블로그 세부 키워드 노출에 집중해, 광고 3개월 뒤 신환이 늘고 6개월 만에 병원을 확장했습니다. 78개 키워드 중 52개를 노출하며 경기 침체기(2022년 11월)에 1일 1임플란트, 최고 매출을 달성했습니다.",
    "167382065": "20년 된 성형외과가 애드리절트와 포지셔닝으로 타겟을 좁히고 맞춤 콘텐츠·세부 키워드를 진행한 결과, 광고 2개월 만에 문의가 늘어 담당 이사님이 다른 병원 2곳을 직접 소개했습니다.",
    "167382901": "수기가 낮아 광고를 망설이는 내과도 세부 키워드를 미리 깔아두면 효과를 봅니다. M의원은 월 플레이스 방문자가 0에서 700을 넘었고, D의원은 개원 한 달 만에 플레이스 유입 1,600회, V의원은 개원 3주 만에 홍보 효과를 체감했습니다.",
    "167408277": "10년 전엔 광고비를 쏟아부어 순이익이 거의 없던 월 매출 1억을, 이번에는 마케팅 비용을 줄이고 원장님 브랜딩으로 달성해 순이익에서 큰 차이를 만든 개인병원 사례입니다.",
    "167431125": "보통 3개월 걸리는 효과를 S피부과는 광고 시작 한 달 만에 봤습니다. 원장님의 증례 콘텐츠 협조와, 수요가 많은 지역을 먼저 노출한 뒤 낮은 지역을 서브로 잡는 전략이 빠른 결과를 만들었습니다.",
    "167431321": "강남에서 개원한 M 모발이식 병원은 개원 전부터 브랜딩을 준비해, 광고 3개월 만에 '환자가 너무 많아 광고를 살살 해달라'는 말을 들을 정도로 성과를 냈습니다. 개원과 동시에 수술 스케줄이 조기 마감됐습니다.",
    "167449883": "전문의 자격증을 가진 마케터가 직접 원고를 쓴 S재활의학과는, 광고 2주 만에 문의가 늘고 3개월 만에 전월 대비 매출 22% 상승을 기록했습니다. 세부 키워드 노출도가 일주일 만에 2배로 올랐습니다.",
}

# ── FAQ(자주 묻는 질문) — idx → [{"q","a"}] ──
# AEO: 각 답변은 독립적으로 완결되게 쓴다(답변엔진이 그대로 인용).
FAQS = {
    "164429049": [
        {
            "q": "B의원은 얼마 만에 성과가 났나요?",
            "a": "광고 시작 3개월 만에 인터넷 신규환자가 35명에서 최대 130명까지 늘며 목표치였던 70명을 넘어섰습니다.",
        },
        {
            "q": "왜 대행사를 애드리절트로 바꿨나요?",
            "a": "기존 대행사는 환자가 줄어도 자사 광고에는 문제가 없다고만 하고 한 팀처럼 움직이지 않았습니다. 애드리절트는 병원에 필요한 것을 먼저 제안하며 한 팀으로 관리했습니다.",
        },
    ],
    "164427329": [
        {
            "q": "D의원의 기존 광고비 문제는 무엇이었나요?",
            "a": "월 2,800~3,000만원을 대부분 파워링크에 쓰고 있었고, 강남권 병원 수준의 비용에도 환자가 늘지 않았습니다.",
        },
        {
            "q": "애드리절트와 진행한 결과는 어땠나요?",
            "a": "파워링크를 끄고 검색 의도에 맞춘 콘텐츠로 전환한 뒤 전년 같은 시기 대비 환자가 30% 증가했습니다.",
        },
    ],
    "164425283": [
        {
            "q": "인터넷 신규환자가 얼마나 늘었나요?",
            "a": "인터넷 신규환자 0명에서 월 80명까지 증가했습니다.",
        },
        {
            "q": "기존에 광고비를 얼마나 쓰고 있었나요?",
            "a": "개원 후 6개월 동안 월 약 1,000만~1,500만원의 광고비를 쓰고 있었습니다.",
        },
    ],
    "166883724": [
        {
            "q": "S치과는 인터넷 신규환자가 얼마나 늘었나요?",
            "a": "월 30명 내외에서 시작해 광고 3개월 만에 3배 이상 늘었고, 광고 4년 차에는 월 평균 300명 이상으로 기존 대비 10배 이상 증가했습니다.",
        },
        {
            "q": "세부키워드 전략이 무엇인가요?",
            "a": "검색량이 큰 대표키워드 하나에 집중하는 대신, '강남충치치료'·'강남야간진료치과'처럼 환자가 실제로 조합해 검색하는 수백 개의 세부키워드를 여러 채널에서 활용하는 전략입니다. 경쟁이 덜하면서 내원 의도가 분명한 검색과 병원을 연결합니다.",
        },
        {
            "q": "광고비를 늘려서 얻은 결과인가요?",
            "a": "아닙니다. 광고비를 늘린 것이 아니라 병원마케팅 전략 자체를 세부키워드 중심으로 재설계한 결과입니다.",
        },
    ],
    "167070308": [
        {
            "q": "D의원은 병원명 검색량이 얼마나 늘었나요?",
            "a": "마케팅 두 달째에 기존 200건대에서 770건으로 3배 이상 늘었고, 이후 꾸준히 증가해 월 약 2,000건에 이르렀습니다.",
        },
        {
            "q": "어떤 전략으로 성과를 냈나요?",
            "a": "원장님이 직접 운영하는 블로그를 중심 채널로 삼아 환자의 질문과 반응을 반영한 콘텐츠를 제작하고, 아이디어와 피드백을 수시로 주고받는 애자일 방식으로 빠르게 개선했습니다.",
        },
        {
            "q": "서울 이전 후 마케팅은 언제부터 효과가 났나요?",
            "a": "첫 달은 콘텐츠 제작과 니즈 분석 등 준비 기간이었고, 두 달째부터 병원명 검색량이 3배 이상 늘며 뚜렷한 변화가 나타났습니다.",
        },
    ],
    "167212324": [
        {
            "q": "광고 6개월 만에 어떤 성과가 났나요?",
            "a": "환자가 꾸준히 늘어 직원들이 바쁠 정도가 됐고, 원장님이 다른 병원을 소개할 만큼 신뢰로 이어져 6개월 만에 병원 확장까지 성공했습니다.",
        },
        {
            "q": "어떤 마케팅을 진행했나요?",
            "a": "메디컬 패키지(정보성 블로그·다채널 배포)로 시작해, 경쟁이 치열한 지역 특성에 맞춰 유튜브 광고, 플레이스 상위노출, 온라인 평판관리를 단계적으로 더했습니다.",
        },
        {
            "q": "조회수·체류시간 같은 지표로 보고하나요?",
            "a": "아닙니다. 조회수·체류시간보다 '실제로 환자가 얼마나 오는가'에 집중해, 매달 어떤 질환에 집중할지와 효과는 어떤지를 병원과 소통하며 관리합니다.",
        },
    ],
    "167232106": [
        {
            "q": "A병원은 병원명 검색량이 얼마나 늘었나요?",
            "a": "마케팅 두 달째에 병원명 검색량이 200건대에서 770건으로 3배 이상 늘었고, 1년 4개월 뒤에는 월 2천 건 가까이로 약 10배 증가했습니다.",
        },
        {
            "q": "서울 이전 후 언제부터 효과가 났나요?",
            "a": "첫 달은 콘텐츠 방향을 잡는 준비 기간이라 성과가 미비했고, 두 달째부터 검색량이 3배 이상 늘며 뚜렷한 변화가 나타났습니다.",
        },
        {
            "q": "어떤 방식으로 마케팅을 진행했나요?",
            "a": "원장님 블로그를 중심으로 환자 니즈를 반영한 콘텐츠를 만들고, 아이디어와 피드백을 빠르게 주고받으며 개선하는 애자일 방식으로 진행했습니다.",
        },
    ],
    "167246130": [
        {
            "q": "이전 광고회사와 비교해 효과가 어땠나요?",
            "a": "A병원 원장님은 이전 광고회사에 맡겼을 때보다 60~70% 정도 더 효과를 봤다는 피드백을 주셨습니다.",
        },
        {
            "q": "애드리절트는 어떤 성과를 가장 중요하게 보나요?",
            "a": "'친절하다·소통이 빠르다'는 평가도 감사하지만, 무엇보다 '환자가 늘었다'는 결과를 가장 보람 있게 여깁니다.",
        },
        {
            "q": "계약은 어떻게 진행되나요?",
            "a": "계약 전 센터장과 상담을 하고, 계약이 진행되면 전담 팀이 배정되어 관리합니다.",
        },
    ],
    "167246533": [
        {
            "q": "병원마케팅은 언제부터 효과가 나나요?",
            "a": "지역·분과·규모 등이 복합적으로 작용해 딱 잘라 말하기는 어렵지만, 메디컬 패키지를 이용한 대부분의 병원이 2~3개월이면 인터넷 유입이 생겼다고 말합니다.",
        },
        {
            "q": "효과를 더 높이려면 무엇을 하면 되나요?",
            "a": "병원 내부에서 인터넷 유입을 측정해 공유해 주시면 그 데이터를 반영해 더 효율적인 광고가 가능합니다. 애드리절트도 월 단위로 내원율을 확인합니다.",
        },
        {
            "q": "어떤 진료과 성공사례가 있나요?",
            "a": "정형외과·피부과·성형외과·안과·치과·암병원 등 다양한 분과의 원장님들이 인터넷 신환 증가 등 실제 성과 피드백을 주셨습니다.",
        },
    ],
    "167284802": [
        {
            "q": "안과마케팅은 어떻게 진행했나요?",
            "a": "환자가 실제로 검색하는 키워드(다래끼·건조증·눈통증 등)를 잡아 노출을 장악하고, 환자 심리를 반영한 콘텐츠를 제작하며, 1:1 담당자가 밀착 관리하는 세 가지에 집중했습니다.",
        },
        {
            "q": "키워드는 얼마나 확장했나요?",
            "a": "처음에는 타겟을 좁혀 37개 키워드로 시작해 2주 만에 노출도 약 35%를 채웠고, 효과를 체감한 뒤 101개로 확장하며 노출을 계속 높였습니다.",
        },
        {
            "q": "안과 광고는 지금 시작해도 될까요?",
            "a": "안과는 아직 타 진료과에 비해 광고를 진행하는 곳이 많지 않아, 지역 내 상위 노출을 선점하기 좋은 시점입니다.",
        },
    ],
    "167296385": [
        {
            "q": "한의원 광고 성공 비결은 무엇이었나요?",
            "a": "환자가 어떤 키워드로 검색하든 노출되도록 156개 세부 키워드를 집중 관리(노출도 약 80%)하고, 매년 개정되는 의료법을 지킨 콘텐츠를 제작한 두 가지가 핵심이었습니다.",
        },
        {
            "q": "얼마나 오래 함께했나요?",
            "a": "2019년 10월 첫 계약 이후 3년 넘게 지속하고 있으며, 원장님은 '지금처럼만 해 달라'는 피드백을 주셨습니다.",
        },
        {
            "q": "세부 키워드 관리가 왜 중요한가요?",
            "a": "환자는 '00 목통증'·'00 교통사고한의원'처럼 다양한 세부 키워드로 검색하기 때문에, 어떤 검색어에도 병원이 노출돼야 신환 유입이 늘어납니다.",
        },
    ],
    "167308882": [
        {
            "q": "원장님이 왜 지인을 소개했나요?",
            "a": "광고 결과와 애드리절트의 업무 방식(빠른 제안·체계적 관리)에 만족해, 학회·논문에 열정적인 원장님이 지인 원장 2분을 직접 소개해 주셨습니다.",
        },
        {
            "q": "경쟁이 치열한데 어떻게 노출을 확보했나요?",
            "a": "병원에 도움이 될 키워드를 계속 정비(추가·제외)하고 세부 키워드 노출도를 수시로 관리해 유지했습니다.",
        },
        {
            "q": "어떤 채널로 광고했나요?",
            "a": "블로그·유튜브·방송을 주력으로 진행했고, 광고한 채널 전반에서 골고루 문의가 들어온다는 피드백을 받았습니다.",
        },
    ],
    "167309357": [
        {
            "q": "수원 A병원은 얼마나 효과를 봤나요?",
            "a": "애드리절트와 3개월 만에 효과를 체감했고, 이전 대비 환자가 60~70% 증가했습니다. 새로 생긴 입원실 문의는 물론 일반 치료 환자도 함께 늘었습니다.",
        },
        {
            "q": "노출 키워드는 얼마나 늘었나요?",
            "a": "개원 초 약 24개 키워드가 노출되던 것이 10개월 차에는 94개까지 늘었습니다. 키워드당 보장형 상품(최소 10만 원)으로 환산하면 약 940만 원 상당을, 팀장 1명 인건비 수준 비용으로 확보한 셈입니다.",
        },
        {
            "q": "애드리절트는 어떤 방식으로 노출을 늘리나요?",
            "a": "특정 키워드를 보장하는 방식이 아니라, 잠재 환자가 실제로 검색하는 유의미한 키워드를 많이 발굴해 브랜드 블로그로 노출시키는 방식(메디컬 패키지)으로 진행합니다.",
        },
    ],
    "167310045": [
        {
            "q": "부산 B정형외과는 얼마나 늘었나요?",
            "a": "광고 첫 달(6월) 약 15명이던 내원 환자가 5개월 차(10월)에 51명으로 늘며 약 40% 증가했습니다.",
        },
        {
            "q": "어떻게 환자를 늘렸나요?",
            "a": "환자가 병원을 찾을 때 검색하는 수십~수백 개의 키워드에 병원이 노출되도록 하고, 매주 통계 자료로 실제 내원 효과를 측정해 전략에 반영했습니다.",
        },
        {
            "q": "메디컬 패키지가 무엇인가요?",
            "a": "환자가 병원을 찾는 경로를 분석해 만든 상품으로, 잠재 환자에게 병원을 알리는 '기본'을 지키며 광고를 진행하는 방식입니다.",
        },
    ],
    "167311286": [
        {
            "q": "500례는 얼마 만에 달성했나요?",
            "a": "2022년 확장 이전 후 4개월이 지난 6월에 300례, 10월에 500례를 달성했습니다. 병원마케팅 시작 기준 8개월 만의 성과입니다.",
        },
        {
            "q": "메디컬 패키지는 어떻게 비용을 아끼나요?",
            "a": "키워드당 비용을 청구하는 보장형이 아니라 전체 키워드 리스트를 채워가는 방식이라, 보장형으로 환산하면 월 2,000만 원이 넘는 노출을 팀장 1명 인건비 수준으로 진행합니다.",
        },
        {
            "q": "성과의 다른 이유는 무엇인가요?",
            "a": "광고뿐 아니라 병원의 높은 의료 서비스 수준과 내부의 적극적인 피드백·참여가 함께여서 가능했습니다. 원장·팀장·실장이 광고에 참여할 때 효과가 큽니다.",
        },
    ],
    "167311629": [
        {
            "q": "ROAS 5000%는 어떻게 계산됐나요?",
            "a": "매출액 5억 원 ÷ 광고비 1,000만 원 × 100 = 5000%입니다. 같은 노출을 파워링크로 만들려면 키워드 10개만 세팅해도 월 2,200만 원이 듭니다.",
        },
        {
            "q": "메디컬 패키지 비용은 얼마인가요?",
            "a": "보장형이 아니라 키워드당 비용을 청구하지 않으며, 기본 구성이 경력 있는 마케팅 팀장 1명의 인건비 정도입니다.",
        },
        {
            "q": "효과는 얼마나 걸리나요?",
            "a": "콘텐츠가 누적될수록 힘을 발휘하는 상품이라, 글이 누적되기까지 보통 2~3개월 정도가 필요합니다. 이 병원은 6년간 수천 건의 콘텐츠를 발행했습니다.",
        },
    ],
    "167324919": [
        {
            "q": "Y치과는 얼마 만에 성과가 났나요?",
            "a": "노출도가 차오른 광고 3개월째부터 신규환자가 늘기 시작해 직원들이 바쁠 정도가 됐고, 6개월 만에 병원을 확장했습니다. 2년 6개월째인 2022년 11월에는 최고 매출을 달성했습니다.",
        },
        {
            "q": "방문자·조회수로 성과를 보나요?",
            "a": "아닙니다. 방문자·조회수보다 '작업한 키워드가 얼마나 노출됐는지'와 '그로 인해 환자 유입이 얼마나 늘었는지'를 중점적으로 봅니다. 맛집 글로 방문자만 늘리는 방식과는 다릅니다.",
        },
        {
            "q": "비용 대비 가치는 어느 정도인가요?",
            "a": "78개 중 52개 노출을 상위노출 보장형(키워드당 60~70만 원 시세)으로 환산하면 3천만 원이 넘지만, Y치과는 마케팅 팀장 1명 인건비 수준만 지출하고 있습니다.",
        },
    ],
    "167382065": [
        {
            "q": "성형외과는 얼마 만에 효과가 났나요?",
            "a": "광고를 진행한 지 2개월 만에 문의가 늘었고, 효과를 본 원장님이 망설임 없이 병원 2곳을 소개해 주셨습니다.",
        },
        {
            "q": "효과를 본 이유는 무엇인가요?",
            "a": "① 포지셔닝으로 타겟을 좁히고 ② 타겟에 맞는 콘텐츠·키워드로 맞춤 광고를 하고 ③ 메디컬 패키지로 세부 키워드를 장악한 세 가지입니다.",
        },
        {
            "q": "비용은 어느 정도인가요?",
            "a": "오랜 경력의 마케팅 팀장 1명 인건비 정도로 생각하시면 됩니다. 마케터를 직접 뽑아 교육하는 것보다 비용·시간·성과 면에서 효율적입니다.",
        },
    ],
    "167382901": [
        {
            "q": "내과도 광고 효과가 있나요?",
            "a": "수기가 낮은 내과도 세부 키워드를 미리 깔아두면 검진 시즌 등 필요할 때 노출돼 효과를 봅니다. M의원은 플레이스 방문자 0→700, D의원은 개원 한 달 만에 유입 1,600회를 기록했습니다.",
        },
        {
            "q": "효과는 언제부터 체감되나요?",
            "a": "M의원은 3개월 차부터 실질적인 환자 유입을 체감했습니다. 세부 키워드가 쌓이는 데 시간이 걸리지만, 시간이 지날수록 무엇을 검색해도 병원이 노출됩니다.",
        },
        {
            "q": "경쟁이 적은 지역은 어떤가요?",
            "a": "V의원은 내과 광고가 많지 않은 지역이라 무엇을 검색하든 병원이 노출되는 독점에 가까운 마케팅이 가능했고, 개원 3주 만에 홍보 효과를 체감했습니다.",
        },
    ],
    "167408277": [
        {
            "q": "같은 월 매출 1억인데 무엇이 다른가요?",
            "a": "10년 전엔 광고비를 대거 투입해 순이익이 거의 없는 1억이었지만, 이번에는 마케팅 비용을 줄이고 원장님을 브랜딩해 달성한 1억이라 순이익에서 큰 차이가 납니다.",
        },
        {
            "q": "매출이 줄면 어떻게 대응하나요?",
            "a": "'우리 광고엔 문제없다'며 외부 탓으로 일관하지 않습니다. 매출·환자가 줄면 다양한 시도를 하며 더 나은 방법을 계속 찾습니다.",
        },
        {
            "q": "얼마나 걸려 목표를 달성했나요?",
            "a": "코로나 타격 등 외부 요인으로 쉽지 않았지만, 원장님의 신뢰와 적극적인 자료 협조 속에 꾸준한 시도로 목표였던 월 매출 1억을 달성했습니다.",
        },
    ],
    "167431125": [
        {
            "q": "효과는 보통 얼마나 걸리나요?",
            "a": "병원 관련 키워드를 장악하는 방식이라 평균 3개월 정도 걸립니다. 다만 S피부과는 원장님의 적극적인 협조와 지역 전략으로 한 달 만에 효과가 나타났습니다.",
        },
        {
            "q": "주변 지역에 환자 수요가 적으면 어떻게 하나요?",
            "a": "수요가 많은 지역에 먼저 병원을 노출한 뒤, 서브 작업으로 수요가 낮은 주변 지역 키워드를 잡는 방식으로 진행합니다.",
        },
        {
            "q": "한 고객사를 몇 명이 담당하나요?",
            "a": "실무자 한 명이 고객사 하나를 전담하는 시스템이라, 맡은 병원에 대한 애정도와 관심이 높습니다.",
        },
    ],
    "167431321": [
        {
            "q": "개원 병원은 언제 마케팅을 시작해야 하나요?",
            "a": "인지도가 없는 개원 병원일수록 개원 전부터 마케팅을 준비하는 것이 좋습니다. M병원은 개원 전부터 준비해 개원과 동시에 환자가 늘고 3개월 만에 수술 스케줄이 조기 마감됐습니다.",
        },
        {
            "q": "경쟁이 치열한 강남에서 어떻게 차별화했나요?",
            "a": "소규모 병원만의 강점(대형 병원이 못 하는 시스템)을 부각하고, 가격대가 높은 모발이식 특성상 신중한 환자를 위한 정보를 M병원만의 강점으로 담아 수요 높은 키워드와 함께 노출했습니다.",
        },
        {
            "q": "개원 병원 브랜딩은 왜 중요한가요?",
            "a": "인지도가 없는 개원 병원은 자주 노출돼 환자의 인식에 들어가야 합니다. '줄 세우기 전략'과 환자 바이럴(좋은 리뷰)로 '개인 병원인데 리뷰가 좋다'는 인식을 만드는 것이 핵심입니다.",
        },
    ],
    "167449883": [
        {
            "q": "S병원은 얼마나 빨리 효과가 났나요?",
            "a": "광고 2주 만에 문의가 늘어 실제 방문으로 이어졌고, 3개월 만에 개원 이래 처음으로 방문 환자가 80명을 넘으며 전월 대비 매출이 22% 상승했습니다.",
        },
        {
            "q": "콘텐츠는 누가 작성하나요?",
            "a": "애드리절트에는 전문의 자격증을 보유한 마케터가 있어 재활의학과 정보성 원고를 직접 작성했습니다. 전문성과 깊이에서 일반 원고와 큰 차이가 나 환자 신뢰로 이어집니다.",
        },
        {
            "q": "노출도는 어떻게 높이나요?",
            "a": "키워드 분석 → 병원별 우선순위 → 전략적 배치 → 변화하는 네이버 로직 연구 → 핵심 키워드 반복 작업의 다섯 단계로 진행하며, S병원은 일주일 만에 노출도가 2배로 올랐습니다.",
        },
    ],
}


def _get(url, referer="https://adresult.kr/"):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": referer})
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read()


def fetch_html(idx):
    cache = os.path.join(REPO, "scripts", ".cache")
    os.makedirs(cache, exist_ok=True)
    p = os.path.join(cache, f"case-{idx}.html")
    if not os.path.exists(p):
        open(p, "wb").write(_get(BOARD + idx))
    return p


def px(s, k):
    m = re.search(k + r"\s*:\s*([0-9.]+)px", s or "", re.I)
    return float(m.group(1)) if m else 0


def weight(s):
    m = re.search(r"font-weight\s*:\s*([a-z0-9]+)", s or "", re.I)
    if not m:
        return 0
    v = m.group(1).lower()
    return 700 if v in ("bold", "bolder") else (int(v) if v.isdigit() else 0)


def color(s):
    m = re.search(r"(?<!background-)color\s*:\s*(#[0-9a-fA-F]{3,6}|rgb\([^)]+\))", s or "", re.I)
    if not m:
        return None
    c = m.group(1)
    mm = re.match(r"rgb\((\d+),\s*(\d+),\s*(\d+)\)", c)
    if mm:
        c = "#%02x%02x%02x" % (int(mm.group(1)), int(mm.group(2)), int(mm.group(3)))
    return c.lower()


def bg_color(s):
    """background-color 를 hex 로 반환. 흰색/투명은 제외(형광펜만 보존)."""
    m = re.search(r"background-color\s*:\s*(#[0-9a-fA-F]{3,6}|rgb\([^)]+\)|transparent)", s or "", re.I)
    if not m:
        return None
    c = m.group(1).lower()
    if c == "transparent":
        return None
    mm = re.match(r"rgb\((\d+),\s*(\d+),\s*(\d+)\)", c)
    if mm:
        r, g, b = int(mm.group(1)), int(mm.group(2)), int(mm.group(3))
        if r >= 250 and g >= 250 and b >= 250:
            return None
        c = "#%02x%02x%02x" % (r, g, b)
    if c in ("#fff", "#ffffff"):
        return None
    return c


def is_dark(c):
    if not c or not c.startswith("#"):
        return True
    h = c[1:]
    h = "".join(x * 2 for x in h) if len(h) == 3 else h
    try:
        r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
    except ValueError:
        return True
    return r < 70 and g < 70 and b < 70


def walk(node, st, runs, sizes):
    for ch in node.children:
        if isinstance(ch, NavigableString):
            t = str(ch).replace("\n", " ")
            if t:
                runs.append({**st, "t": t})
        elif isinstance(ch, Tag):
            if ch.name == "br":
                runs.append({"br": True})
                continue
            if ch.name in ("script", "style"):
                continue
            style = ch.get("style", "") or ""
            nst = dict(st)
            if ch.name in ("strong", "b") or weight(style) >= 600:
                nst["b"] = True
            if ch.name in ("em", "i") or re.search(r"font-style\s*:\s*italic", style, re.I):
                nst["i"] = True
            if ch.name == "u" or re.search(r"text-decoration[^;]*underline", style, re.I):
                nst["u"] = True
            c = color(style)
            if c and not is_dark(c):
                nst["c"] = c
            elif c:
                nst.pop("c", None)
            bg = bg_color(style)
            if bg:
                nst["bg"] = bg
            fs = px(style, "font-size")
            if fs:
                sizes.append(fs)
                if fs >= 17:
                    nst["fs"] = int(round(fs))
            walk(ch, nst, runs, sizes)


def clean_runs(runs):
    out = []
    for r in runs:
        if r.get("br"):
            if out and not out[-1].get("br"):
                out.append({"br": True})
            continue
        t = re.sub(r"[ \t]+", " ", r.get("t", ""))
        if t == "":
            continue
        rr = {"t": t}
        for k in ("b", "i", "u", "c", "fs", "bg"):
            if r.get(k):
                rr[k] = r[k]
        same = out and not out[-1].get("br") and {k: out[-1].get(k) for k in ("b", "i", "u", "c", "fs", "bg")} == {
            k: rr.get(k) for k in ("b", "i", "u", "c", "fs", "bg")
        }
        if same:
            out[-1]["t"] += rr["t"]
        else:
            out.append(rr)
    while out and out[0].get("br"):
        out.pop(0)
    while out and out[-1].get("br"):
        out.pop()
    if out and "t" in out[0]:
        out[0]["t"] = out[0]["t"].lstrip()
    if out and "t" in out[-1]:
        out[-1]["t"] = out[-1]["t"].rstrip()
    return out


def runs_text(runs):
    return "".join(r.get("t", "") for r in runs).strip()


def dims(p):
    try:
        o = subprocess.check_output(
            ["sips", "-g", "pixelWidth", "-g", "pixelHeight", p], stderr=subprocess.DEVNULL
        ).decode()
        w = re.search(r"pixelWidth: (\d+)", o)
        h = re.search(r"pixelHeight: (\d+)", o)
        return (int(w.group(1)), int(h.group(1))) if w and h else (1000, 1000)
    except Exception:
        return (1000, 1000)


def norm_src(node):
    """<img> 의 실제 src(프로토콜 보정) 반환."""
    src = node.get("src") or node.get("data-src") or ""
    if src.startswith("//"):
        src = "https:" + src
    return src


def img_host(src):
    """컨텐츠 이미지 호스트 판별. /upload/(imweb) 또는 pstatic(네이버) 만 채택."""
    if "/upload/" in src:
        return "upload"
    if "pstatic.net" in src:
        return "pstatic"
    return None


def is_cta_banner(href):
    """순수 CTA 배너(전화·카톡 채팅·지도·유튜브 채널)면 True → 제외(공통 하단이 대체).
    블로그·칼럼 링크(blog.naver.com·adresult.kr 등)는 관련 글 링크로 살려 둔다(제외 안 함).
    (유튜브 watch 링크는 이 함수 호출 전에 영상 블록으로 먼저 처리되어 보존된다.)"""
    return bool(
        re.search(r"^tel:|pf\.kakao\.com|map\.naver\.com|youtube\.com/(@|channel/|c/)", href or "")
    )


def watch_video_id(href):
    """유튜브 watch/단축 링크에서 11자리 영상 id 추출(썸네일 링크용)."""
    m = re.search(r"(?:youtu\.be/|[?&]v=)([\w-]{11})", href or "")
    return m.group(1) if m and ("youtube.com/watch" in href or "youtu.be/" in href) else None


def embed_video_id(src):
    """<iframe src=.../embed/{id}> 에서 11자리 영상 id 추출."""
    m = re.search(r"/embed/([\w-]{11})", src or "")
    return m.group(1) if m else None


def node_align(node):
    """블록의 text-align(center/right) 보존. 기본(left/none)은 None."""
    style = node.get("style", "") if isinstance(node, Tag) else ""
    m = re.search(r"text-align\s*:\s*(center|right)", style or "", re.I)
    return m.group(1).lower() if m else None


def build(idx):
    soup = BeautifulSoup(open(fetch_html(idx), encoding="utf-8").read(), "html.parser")
    ogt = soup.find("meta", property="og:title")
    title = ogt["content"].split(" : ")[0].strip() if ogt else ""
    views = soup.select(".fr-view")
    best = (
        max(views, key=lambda e: len(e.get_text(strip=True)) + len(e.select('img[src*="/upload/"]')) * 50)
        if views
        else None
    )
    folder = f"{REPO}/public/images/cases/{idx}"
    os.makedirs(folder, exist_ok=True)
    blocks = []
    counter = {"n": 0, "seen": 0}
    seen_hashes = []  # 이 글 안에서 이미 채택한 이미지 지각 해시(중복 제거용)

    def emit_image(node):
        """컨텐츠 이미지(node) 를 다운로드해 img 블록으로 반환. 제외 대상이면 None."""
        src = norm_src(node)
        if not img_host(src):
            return None  # 추적/프로필/1x1 등 컨텐츠 아닌 이미지
        a = node.find_parent("a")
        href = a.get("href", "") if a else ""
        vid = watch_video_id(href)
        if vid:
            return {"type": "video", "videoId": vid}
        if is_cta_banner(href):
            return None  # 카톡/지도/유튜브 채널 배너 → 공통 하단이 대체
        counter["seen"] += 1
        if counter["seen"] in DROP_IMAGES.get(idx, set()):
            return None  # 이식 제외 지정 이미지(표지·제목 배너 등)
        counter["n"] += 1
        n = counter["n"]
        ext = (src.split("?")[0].rsplit(".", 1)[-1] or "png").lower()
        if ext not in ("png", "jpg", "jpeg", "gif", "webp"):
            ext = "png"
        dest = f"{folder}/{n}.{ext}"
        referer = "https://blog.naver.com/" if img_host(src) == "pstatic" else "https://adresult.kr/"
        try:
            open(dest, "wb").write(_get(src, referer=referer))
            w, h = dims(dest)
        except Exception as e:
            print("IMGFAIL", src, e)
            counter["n"] -= 1  # 실패한 파일은 번호 되돌림 → 건너뛰기
            return None
        ih = img_dhash(dest)
        if ih is not None and any((ih - s) <= 6 for s in seen_hashes):
            # imweb(/upload/)·naver(pstatic) 양쪽 업로드로 같은 이미지가 두 번 나온 경우 → 중복 제거
            try:
                os.remove(dest)
            except OSError:
                pass
            counter["n"] -= 1
            return None
        if ih is not None:
            seen_hashes.append(ih)
        block = {
            "type": "img",
            "src": f"/images/cases/{idx}/{n}.{ext}",
            "w": w,
            "h": h,
            "alt": node.get("alt", "") or title,
        }
        if href and not href.startswith("#"):
            block["href"] = href  # 블로그·칼럼 링크 배너 → 클릭 가능한 이미지로 복원
        return block

    def emit_text(node, kind=None):
        """node 의 텍스트를 walk → clean → 블록으로 반환. 빈 텍스트면 None.
        kind 지정 시 그 타입으로(예: callout), 아니면 font-size 로 h/p 판별. 정렬(align) 보존."""
        runs, sizes = [], []
        walk(node, {}, runs, sizes)
        runs = clean_runs(runs)
        if not runs_text(runs):
            return None
        b = {"type": kind or ("h" if (max(sizes) if sizes else 0) >= 19 else "p"), "runs": runs}
        al = node_align(node) or ("center" if kind == "callout" else None)
        if al:
            b["align"] = al
        return b

    if best:
        cbs = best.select('div[class*="_comment_body"]')
        body = cbs[0] if cbs else best
        # imweb 은 각 <p> 를 작은 여백의 독립 문단으로, 빈 <p><br></p> 는 큰 여백으로 렌더한다.
        # → 각 비어있지 않은 <p> 는 자기만의 블록. 빈 <p> 는 다음 블록에 gap 플래그를 준다.
        gap = {"v": False}

        def take_gap(b):
            if gap["v"]:
                b["gap"] = True
                gap["v"] = False
            return b

        for node in body.children:
            if not isinstance(node, Tag):
                continue
            if node.name in ("script", "style"):
                continue
            if node.name == "hr":
                gap["v"] = False
                blocks.append({"type": "hr"})
                continue
            iframes = node.select('iframe[src*="/embed/"]')
            imgs = node.select("img")
            if iframes:
                gap["v"] = False
                # 영상 iframe 블록(fr-video 등) → video 블록(문서 순서)
                for ifr in iframes:
                    vid = embed_video_id(ifr.get("src", ""))
                    if vid:
                        blocks.append({"type": "video", "videoId": vid})
                # 같은 <p>에 이미지도 있으면 함께 수집(영상 뒤) — 이미지 유실 방지
                for im in imgs:
                    ib = emit_image(im)
                    if ib:
                        blocks.append(ib)
                continue
            if imgs:
                gap["v"] = False
                # 이미지 블록: 같은 블록에 텍스트가 섞여 있으면 텍스트 먼저(기존 preorder 재현)
                tb = emit_text(node)
                if tb:
                    blocks.append(tb)
                for im in imgs:
                    ib = emit_image(im)
                    if ib:
                        blocks.append(ib)
                continue
            if node.name == "table":
                tb = emit_text(node, kind="callout")
                if tb:
                    blocks.append(take_gap(tb))
                continue
            # 일반 텍스트 <p>/<div> 등 → 각각 자기 블록. 빈 <p> 는 gap 플래그.
            tb = emit_text(node)
            if tb is None:
                gap["v"] = True
                continue
            blocks.append(take_gap(tb))

    def _n(x):
        return re.sub(r"\s+", "", x or "")

    while blocks:
        b0 = blocks[0]
        if not b0.get("runs"):
            break
        t0, tt = _n(runs_text(b0["runs"])), _n(title)
        if t0 and (t0 == tt or (len(t0) > 15 and (t0 in tt or tt in t0))):
            blocks.pop(0)
        else:
            break
    while blocks and blocks[-1]["type"] == "img" and blocks[-1].get("h") and blocks[-1]["w"] / blocks[-1]["h"] >= 2.0:
        blocks.pop()
    # 블록에서 제외된 이미지 파일(꼬리 배너·중복 등) 정리 → 고아 파일 방지
    used = {b["src"].rsplit("/", 1)[-1] for b in blocks if b["type"] == "img"}
    for f in os.listdir(folder):
        if f not in used:
            try:
                os.remove(os.path.join(folder, f))
            except OSError:
                pass
    for bi, b in enumerate(blocks):
        b["id"] = bi
        if b.get("runs"):
            for ri, r in enumerate(b["runs"]):
                r["k"] = ri
    img_blocks = [b for b in blocks if b["type"] == "img"]
    ov = COVERS.get(idx)
    if not img_blocks:
        cover_block = None
    elif ov == "last":
        cover_block = img_blocks[-1]
    elif isinstance(ov, int) and 1 <= ov <= len(img_blocks):
        cover_block = img_blocks[ov - 1]
    else:
        cover_block = img_blocks[0]
    cover = cover_block["src"] if cover_block else ""
    cwh = (cover_block["w"], cover_block["h"]) if cover_block else (1000, 1000)
    # 목록 카드 excerpt: 본문 문단(p)을 순서대로 이어붙여 ~160자 (카드는 line-clamp-3로 3줄+말줄임).
    body_text = " ".join(
        runs_text(b["runs"]) for b in blocks if b["type"] == "p" and len(runs_text(b["runs"])) > 4
    )
    excerpt = body_text[:160].rstrip()
    return {
        "slug": idx,
        "title": title,
        "excerpt": excerpt,
        "summary": LEADS.get(idx, ""),
        "faq": FAQS.get(idx, []),
        "cover": cover,
        "coverW": cwh[0],
        "coverH": cwh[1],
        "blocks": blocks,
    }


def main():
    arts = [build(i) for i in IDXS]
    for a in arts:
        imgs = len([b for b in a["blocks"] if b["type"] == "img"])
        txt = len([b for b in a["blocks"] if b["type"] != "img"])
        print(f'{a["slug"]}: {txt} text, {imgs} img | {a["title"][:45]}')
    # 사이트 노출은 최신(IDXS 맨 뒤)이 맨 앞 → 출력 배열을 역순으로 뒤집는다.
    display = list(reversed(arts))
    print("노출 순서:", " → ".join(a["slug"] for a in display))
    body = json.dumps(display, ensure_ascii=False, indent="\t")
    ts = (
        '''import type { CardItem } from "@/components/shared/PaginatedCards";

// 애드리절트 병원마케팅 성공사례 — adresult.kr 원문 이식(scripts/port-cases.py 자동 생성).
// 상단 브랜드 헤더/하단 CTA는 상세 페이지(src/app/cases/[slug])에서 공통 렌더.
export type CaseRun = { t?: string; b?: boolean; i?: boolean; u?: boolean; c?: string; fs?: number; bg?: string; br?: boolean; k?: number };
export type CaseBlock = {
	id?: number;
	type: "h" | "p" | "img" | "video" | "hr" | "callout";
	runs?: CaseRun[];
	align?: "center" | "right";
	gap?: boolean;
	src?: string;
	href?: string;
	alt?: string;
	w?: number;
	h?: number;
	videoId?: string;
};
export type CaseFaq = { q: string; a: string };
export type CaseArticle = {
	slug: string;
	title: string;
	excerpt: string;
	summary?: string;
	faq?: CaseFaq[];
	cover: string;
	coverW: number;
	coverH: number;
	blocks: CaseBlock[];
};

export const CASE_ARTICLES: CaseArticle[] = %s as CaseArticle[];

export const SUCCESS_CASES: CardItem[] = CASE_ARTICLES.map((a) => ({
	id: a.slug,
	title: a.title,
	excerpt: a.excerpt,
	image: a.cover,
	href: `/cases/${a.slug}`,
}));

export const getCase = (slug: string) => CASE_ARTICLES.find((a) => a.slug === slug);
'''
        % body
    )
    open(f"{REPO}/src/data/success-cases.ts", "w", encoding="utf-8").write(ts)
    print("WROTE src/data/success-cases.ts")
    # biome 포맷에 맞춰 정리(생성물이 lint를 통과하도록)
    try:
        subprocess.run(
            ["pnpm", "exec", "biome", "format", "--write", "src/data/success-cases.ts"],
            cwd=REPO,
            check=False,
        )
    except Exception:
        pass


if __name__ == "__main__":
    main()
