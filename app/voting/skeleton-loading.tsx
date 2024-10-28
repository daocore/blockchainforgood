import { Skeleton } from "@/components/ui/skeleton";

export function Loading() {
  return (
    <div className="w-full px-16" style={{ height: "calc(100vh - 5rem)" }}>
      <Skeleton className="w-full h-14"></Skeleton>
      <div
        className="flex gap-16 mt-10"
        style={{ height: "calc(100vh - 5rem - 3.5rem - 2.5rem - 2rem - 2rem)" }}
      >
        <div className="flex flex-col gap-8 w-1/3">
          <Skeleton className="w-full h-2/3"></Skeleton>
          <Skeleton className="w-full h-1/3"></Skeleton>
        </div>
        <div className="w-2/3">
          <Skeleton className="w-full h-full"></Skeleton>
        </div>
      </div>
      <div className="mt-8">
        <Skeleton className="w-full h-8"></Skeleton>
      </div>
    </div>
  );
}
