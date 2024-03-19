import { Skeleton } from "@nextui-org/react";

function SuggestionSkeleton() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <SuggestionSkeletonItem />
            <SuggestionSkeletonItem />
            <SuggestionSkeletonItem />
        </div>
    );
}

function SuggestionSkeletonItem() {
    return (
        <article className="border-1 border-solid rounded-lg overflow-hidden">
            <Skeleton className="aspect-square" />
            <div className="border-t border-solid h-10" />
        </article>
    );
}

export default SuggestionSkeleton