import { ErrorBoundary } from "react-error-boundary";
import { BlogDetailImpl } from "./detail";
import { Suspense } from "react";
import { Spin } from "@/components";

export function BlogDetail() {
  return (
    <div className="w-full flex justify-center">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        {/* TODO: skeleton screen */}
        <Suspense fallback={<Spin />}>
          <BlogDetailImpl />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
