"use client";

import { IMAGE_URL } from "@/constants";
import { INews } from "../types";
import { cn, postDate } from "@/lib";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Empty } from "@/components/Empty";
import { useIsMobile } from "@/hooks";
import { HTMLAttributeAnchorTarget } from "react";
import { NEWS_TYPE_NAME } from "../constants";

export function NewsList({ list }: { list: INews[] }) {
  const isMobile = useIsMobile();
  const linkTarget = isMobile ? "__self" : "__blank";

  if (list.length === 0) {
    return <Empty />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {list.map((item) => (
          <NewsCard linkTarget={linkTarget} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export function NewsCard({
  item,
  linkTarget,
  className,
}: {
  item: INews;
  linkTarget?: HTMLAttributeAnchorTarget;
  className?: string;
}) {
  const { cover, intro, views, updateDate, name, type } = item;
  return (
    <Link
      target={linkTarget}
      href={`/news/detail/${item.id}`}
      className={cn(
        "p-3 bg-white cursor-pointer inline-flex flex-col justify-between gap-4 w-full max-w-[100vw]",
        className
      )}
    >
      <img
        className="w-full aspect-video flex-initial"
        src={`${IMAGE_URL}${cover}`}
        alt={name}
      />
      <div className="flex-auto flex flex-col justify-start">
        <p className="text-newsTag text-xs font-semibold mb-2">
          {NEWS_TYPE_NAME[type]?.toUpperCase()}
        </p>
        <h4 className="line-clamp-2 font-bold leading-snug">{name}</h4>
        <p className="line-clamp-2 text-xs leading-normal">{intro}</p>
      </div>
      <p className="flex-initial flex items-center gap-4 text-xs opacity-60">
        <span>{postDate(updateDate)}</span>
        <span className="inline-flex items-center gap-1">
          <Eye size={16} />
          <span>{views}</span>
          Views
        </span>
      </p>
    </Link>
  );
}

export function NewsCardLatest({
  item,
  linkTarget,
}: {
  item: INews;
  linkTarget: HTMLAttributeAnchorTarget;
}) {
  const { cover, intro, views, content, name, type } = item;
  const { updateDate } = content;
  return (
    <Link
      target={linkTarget}
      href={`/news/detail/${item.id}`}
      className="p-3 bg-white gap-3 hidden md:flex"
    >
      <img
        className="w-2/3 aspect-video"
        src={`${IMAGE_URL}${cover}`}
        alt={name}
      />
      <div className="w-1/3">
        <div>
          <p className="text-newsTag text-xs font-semibold mb-2">
            {NEWS_TYPE_NAME[type]?.toUpperCase()}
          </p>
          <h4 className="line-clamp-2 font-bold leading-snug">{name}</h4>
          <p className="line-clamp-4 text-xs leading-normal">{intro}</p>
        </div>

        <p className="flex items-center gap-4 text-xs mt-3 opacity-80">
          <span>{postDate(updateDate)}</span>
          <span className="inline-flex items-center gap-1">
            <Eye size={16} />
            <span>{views}</span>
            Views
          </span>
        </p>
      </div>
    </Link>
  );
}
