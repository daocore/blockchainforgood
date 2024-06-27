import { cn } from "@/lib";

export function VerticalLine({
  className,
  dotClassName,
}: {
  className?: string;
  dotClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative border-l border-main h-[60px] ml-6 mr-6",
        className
      )}
    >
      <div className={dotClassName} />
    </div>
  );
}
