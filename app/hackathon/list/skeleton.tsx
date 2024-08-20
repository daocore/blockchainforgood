import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonList() {
  return (
    <div className="space-y-6">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
}

function SkeletonItem() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-6" />
      <Skeleton className="h-8" />
      <div className="grid grid-cols-3 gap-2 grid-row-2 md:grid-row-3 h-48">
        <Skeleton className="row-span-2 col-span-3 md:col-span-2" />
        <Skeleton className="col-span-2 md:col-span-1" />
        <Skeleton className="col-span-1" />
      </div>
    </div>
  );
}
