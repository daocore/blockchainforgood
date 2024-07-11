import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonList() {
  return (
    <>
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </>
  );
}

function SkeletonItem() {
  return (
    <div>
      <Skeleton className="w-[185px] h-[185px] xs:w-[150px] xs:h-[150px] md:w-[185px] md:h-[185px]" />
      <div className="mt-2">
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>
    </div>
  );
}
