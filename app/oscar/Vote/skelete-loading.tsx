import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div className="w-full space-y-2 mt-10">
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
      <Skeleton className="w-full h-6"></Skeleton>
    </div>
  );
}
