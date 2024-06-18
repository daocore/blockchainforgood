"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export function GoBack() {
  const router = useRouter();
  const onBackToIndex = () => {
    router.back();
  };

  return (
    <div className="mb-8 mt-4 block md:hidden">
      <span
        className="text-xs inline-flex cursor-pointer"
        onClick={onBackToIndex}
      >
        <ChevronLeft size={16} />
        Back
      </span>
    </div>
  );
}
