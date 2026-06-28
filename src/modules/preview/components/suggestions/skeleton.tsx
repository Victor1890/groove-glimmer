import { Skeleton } from "@/modules/ui/components/skeleton";

export function SuggestionSkeleton() {
	return (
		<div className="grid grid-cols-2 gap-5">
			<SuggestionSkeletonItem />
			<SuggestionSkeletonItem />
			<SuggestionSkeletonItem />
		</div>
	);
}

export function SuggestionSkeletonItem() {
	return (
		<article className="border border-solid rounded-lg overflow-hidden">
			<Skeleton className="aspect-square" />
			<div className="border-t border-solid h-10" />
		</article>
	);
}
