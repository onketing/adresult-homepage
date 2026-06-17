const KEYS = ["a", "b", "c", "d", "e", "f"];

const SkeletonCard = () => (
	<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
		<div className="aspect-[16/10] animate-pulse bg-slate-100" />
		<div className="space-y-3 p-5">
			<div className="h-5 w-3/4 animate-pulse rounded bg-slate-100" />
			<div className="h-4 w-full animate-pulse rounded bg-slate-100" />
			<div className="h-4 w-2/3 animate-pulse rounded bg-slate-100" />
		</div>
	</div>
);

const Loading = () => {
	return (
		<div className="min-h-screen bg-white">
			<section className="px-4 pt-28 pb-12 md:px-8 md:pt-36">
				<div className="mx-auto max-w-6xl">
					<div className="h-4 w-16 animate-pulse rounded bg-slate-100" />
					<div className="mt-4 h-10 w-80 max-w-full animate-pulse rounded bg-slate-100" />
					<div className="mt-4 h-5 w-full max-w-xl animate-pulse rounded bg-slate-100" />
				</div>
			</section>
			<section className="px-4 pb-16 md:px-8">
				<div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{KEYS.map((k) => (
						<SkeletonCard key={k} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Loading;
