import { cn } from "@/lib";
import { IMAGE_URL } from "@/constants";

export function RawImage({
  src,
  alt = src,
  className,
}: {
  src: string;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={`${IMAGE_URL}${src}`}
      alt={alt}
      className={cn("w-auto h-auto", className)}
    />
  );
}
