"use client";
import { cn, formatPublishDate } from "@/lib";
import { useAPIGetNewsDetail } from "../../api";
import { IMAGE_URL } from "@/constants";
import { useIsMobile } from "@/hooks";
import { NewsDetailSkeleton } from "../../skeleton";
import { NEWS_TYPE_NAME } from "../../constants";
import Link from "next/link";
import "braft-editor/dist/output.css";
import { GoBack } from "./back";

export default function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
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
    intro,
    cover,
    content: { content },
    author,
    type,
    tags,
    publishDate,
  } = data!;

  return (
    <>
      <head>
        <meta property="og:title" content={name} />
        <meta property="og:description" content={intro} />
        {/* <meta property="og:url" content="https://example.com" /> */}
        <meta property="og:image" content={`${IMAGE_URL}${cover}`} />
        {/* <meta property="og:image:type" content="image/jpeg" /> */}
        {/* <meta property="og:image:width" content="1200" /> */}
        {/* <meta property="og:image:height" content="630" /> */}
      </head>
      <div className="w-full md:w-content mx-auto">
        <GoBack />

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
      </div>
    </>
  );
}
