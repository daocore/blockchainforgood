import { Skeleton } from "@/components/ui/skeleton";

export function NewsSkeletonList() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <NewsSkeleton />
      <NewsSkeleton />
      <NewsSkeleton />
    </div>
  );
}

function NewsSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-60 rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4" />
        <Skeleton className="h-4" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

export function TopicSkeleton() {
  const list = Array.from({ length: 10 }, (_, i) => i);
  return (
    <div className="flex gap-2">
      {list.map((i) => (
        <Skeleton key={i} className="h-6 w-12 rounded-full" />
      ))}
    </div>
  );
}

export function NewsDetailSkeleton() {
  return (
    <div>
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}
