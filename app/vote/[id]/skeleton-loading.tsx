import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div className="w-full md:w-content mx-auto">
      <Skeleton className="w-full h-48 md:h-72"></Skeleton>
      <Skeleton className="w-full h-48 md:h-72 my-4"></Skeleton>
      <Skeleton className="w-full h-48 md:h-72"></Skeleton>
    </div>
  );
}
