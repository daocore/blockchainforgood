"use client";
import { BlogDetailImpl } from "./detail";

export default function BlogDetail({ params }: { params: { id: string } }) {
  return (
    <div className="w-full flex justify-center">
      <BlogDetailImpl id={params.id} />
    </div>
  );
}
