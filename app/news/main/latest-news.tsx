"use client";
import { useAPIGetNews } from "../api";
import { INews } from "../types";
import { NewsCard, NewsCardLatest } from "./news-card";
import { Empty } from "@/components/Empty";
import { NewsSkeletonList } from "../skeleton";
import { useIsMobile } from "@/hooks";

export function LatestNews() {
  const { data: { list = [] } = {}, isLoading } = useAPIGetNews({
    current: 1,
    pageSize: 3,
  });

  return (
    <div>
      <h2 className="font-semibold text-lg">Latest</h2>
      {isLoading ? <NewsSkeletonList /> : <ArticleList list={list} />}
    </div>
  );
}

function ArticleList({ list }: { list: INews[] }) {
  const isMobile = useIsMobile();
  const linkTarget = isMobile ? "__self" : "__blank";
  if (list.length === 0) {
    return <Empty />;
  }
  if (list.length === 1) {
    const [item] = list;
    return (
      <div className="grid grid-cols-1">
        <NewsCardLatest linkTarget={linkTarget} key={item.id} item={item} />
      </div>
    );
  }
  if (list.length === 2) {
    const [firstArticle, sencodeArticle] = list;
    return (
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: "2fr 1fr",
        }}
      >
        <NewsCardLatest
          linkTarget={linkTarget}
          key={firstArticle.id}
          item={firstArticle}
        />
        <NewsCard
          linkTarget={linkTarget}
          key={sencodeArticle.id}
          item={sencodeArticle}
        />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-3">
      {list.map((item) => (
        <NewsCard linkTarget={linkTarget} key={item.id} item={item} />
      ))}
    </div>
  );
}
