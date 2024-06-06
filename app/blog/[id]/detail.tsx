"use client";
import type { IBlogDetail } from "../types";
import { useAPIGetBlogDetail } from "../api";
import { postDate } from "@/lib";
import { Spin } from "@/components/Spin";

export function BlogDetailImpl({ id }: { id: string }) {
  const { data = {} as IBlogDetail, isLoading } = useAPIGetBlogDetail(id);

  if (isLoading) {
    return <Spin />;
  }

  const { name, content, updateDate } = data;
  return (
    <div className="md:w-content">
      <h1 className="text-text font-bold text-2xl my-3">{name}</h1>
      <div className="">
        <span className="text-text text-sm opacity-70">
          Published Date: {postDate(updateDate)}
        </span>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      />
    </div>
  );
}
