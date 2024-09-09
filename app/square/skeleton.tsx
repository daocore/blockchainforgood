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
    <div className="flex gap-2">
      <Skeleton className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex-none " />
      <div className="w-[100px] h-[100px] md:w-[125px] md:h-[150px] flex-none flex flex-col justify-between">
        <Skeleton className="h-6" />
        <Skeleton className="h-6" />
      </div>
    </div>
  );
}
