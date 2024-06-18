"use client";
import { useIsMobile } from "@/hooks";
import { cn, formatPublishDate } from "@/lib";
import { IMAGE_URL } from "@/constants";
import { NEWS_TYPE_NAME } from "../../constants";
import Link from "next/link";
import "braft-editor/dist/output.css";
import { useAPIGetNewsDetail } from "../../api";
import { NewsDetailSkeleton } from "../../skeleton";

export function Content({ id }: { id: string }) {
  const { data, isLoading } = useAPIGetNewsDetail(id);
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <div className="w-content mx-auto">
        <NewsDetailSkeleton />
      </div>
    );
  }
  const {
    name,
    content: { content },
    author,
    type,
    tags,
    publishDate,
  } = data!;

  return (
    <div className={cn("w-full md:w-page mx-auto", !isMobile && "mt-12")}>
      <div className="flex">
        <img
          src={`${IMAGE_URL}${author.avatar}`}
          alt={author.name}
          className="w-11 h-11 rounded-full"
        />
        <div className="ml-2 flex flex-col justify-between">
          <Link
            href={author.link}
            target="_blank"
            className="font-bold text-black hover:text-main"
          >
            {author.name}
          </Link>
          <span className="text-description text-xs opacity-70">
            {formatPublishDate(publishDate)}
          </span>
        </div>
      </div>
      <h1 className="text-black font-bold text-3xl my-4 leading-snug">
        {name}
      </h1>
      <div className="flex gap-2 mb-8">
        <span className="text-xs text-turqoise px-2 py-0.5 border-turqoise border">
          {NEWS_TYPE_NAME[type]?.toUpperCase()}
        </span>
      </div>
      <div
        className="content braft-output-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="flex flex-wrap gap-2 mt-8">
        {tags.map((item) => (
          <div
            key={item.id}
            className={cn(
              "w-max whitespace-nowrap px-2 cursor-pointer py-1 text-xs rounded-full bg-white box-border border border-black"
            )}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
