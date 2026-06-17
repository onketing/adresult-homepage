const LINES = ["a", "b", "c", "d", "e"];

const Loading = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-3xl px-4 pt-28 pb-16 md:px-6 md:pt-36">
				<div className="h-4 w-20 animate-pulse rounded bg-slate-100" />
				<div className="mt-6 h-6 w-24 animate-pulse rounded-full bg-slate-100" />
				<div className="mt-4 h-9 w-full animate-pulse rounded bg-slate-100" />
				<div className="mt-2 h-9 w-2/3 animate-pulse rounded bg-slate-100" />
				<div className="mt-4 h-4 w-40 animate-pulse rounded bg-slate-100" />
				<div className="mt-10 aspect-[16/9] w-full animate-pulse rounded-xl bg-slate-100" />
				<div className="mt-8 space-y-3">
					{LINES.map((k) => (
						<div key={k} className="h-4 w-full animate-pulse rounded bg-slate-100" />
					))}
				</div>
			</div>
		</div>
	);
};

export default Loading;
