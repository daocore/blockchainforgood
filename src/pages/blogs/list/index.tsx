import { ErrorBoundary } from "react-error-boundary";
import { BlogListImpl } from "./list";
import { Suspense } from "react";
import { Spin } from "@/components";

export function BlogList() {
  return (
    <div className="w-full flex justify-center">
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        {/* TODO: skeleton screen */}
        <Suspense fallback={<Spin />}>
          <BlogListImpl />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
