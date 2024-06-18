"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useIsMobile } from "@/hooks";

export function GoBack() {
  const router = useRouter();
  const onBackToIndex = () => {
    router.back();
  };
  const isMobile = useIsMobile();

  return (
    isMobile && (
      <div className="mb-8 mt-4">
        <span
          className="text-xs inline-flex cursor-pointer"
          onClick={onBackToIndex}
        >
          <ChevronLeft size={16} />
          Back
        </span>
      </div>
    )
  );
}
