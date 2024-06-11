"use client";

import { IMAGE_URL } from "@/constants";
import { IArticle } from "../types";
import { isMobile, postDate } from "@/lib";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Empty } from "@/components/Empty";
import { useIsMobile } from "@/hooks";
import { HTMLAttributeAnchorTarget } from "react";

export function ArticleList({ list }: { list: IArticle[] }) {
  const isMobile = useIsMobile();
  const linkTarget = isMobile ? "__self" : "__blank";

  if (list.length === 0) {
    return <Empty />;
  }
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        {list.map((item) => (
          <ArticleCard linkTarget={linkTarget} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export function ArticleCard({
  item,
  linkTarget,
}: {
  item: IArticle;
  linkTarget: HTMLAttributeAnchorTarget;
}) {
  const { cover, intro, views, updateDate, name, tags } = item;
  return (
    <Link
      target={linkTarget}
      href={`/news/detail/${item.id}`}
      className="p-2 bg-white cursor-pointer"
    >
      <img
        className="w-full aspect-video"
        src={`${IMAGE_URL}${cover}`}
        alt={name}
      />
      <p className="text-xs my-3 flex gap-2">
        {tags.map((tag) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
      </p>
      <h4 className="line-clamp-2 font-bold leading-snug">{name}</h4>
      <p className="line-clamp-2 text-xs leading-normal">{intro}</p>
      <p className="flex items-center gap-4 text-xs mt-3 opacity-80">
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

export function ArticleCardLatest({
  item,
  linkTarget,
}: {
  item: IArticle;
  linkTarget: HTMLAttributeAnchorTarget;
}) {
  const { cover, intro, views, content, name, tags } = item;
  const { updateDate } = content;
  return (
    <Link
      target={linkTarget}
      href={`/news/detail/${item.id}`}
      className="p-2 bg-white flex gap-3"
    >
      <img
        className="w-2/3 aspect-video"
        src={`${IMAGE_URL}${cover}`}
        alt={name}
      />
      <div className="w-1/3">
        <p className="text-xs mb-3 flex gap-2">
          {tags.map((tag) => (
            <span key={tag.id}>{tag.name}</span>
          ))}
        </p>
        <h4 className="line-clamp-2 font-bold leading-snug">{name}</h4>
        <p className="line-clamp-2 text-xs leading-normal">{intro}</p>
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
