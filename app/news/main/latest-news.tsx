"use client";
import { useAPIGetNews } from "../api";
import { INews } from "../types";
import { NewsCard, NewsCardLatest, NewsList } from "./news-card";
import { Empty } from "@/components/Empty";
import { NewsSkeletonList } from "../skeleton";
import { useIsMobile } from "@/hooks";
import { HTMLAttributeAnchorTarget } from "react";

export function LatestNews() {
  const { data: { list = [] } = {}, isLoading } = useAPIGetNews({
    current: 1,
    pageSize: 3,
  });

  return (
    <div className="mt-4 md:mt-8">
      <h2 className="font-bold text-2xl mb-3">Latest</h2>
      {isLoading ? <NewsSkeletonList /> : <LatestNewsList list={list} />}
    </div>
  );
}

function LatestNewsList({ list }: { list: INews[] }) {
  const isMobile = useIsMobile();
  const linkTarget = isMobile ? "_self" : "_blank";
  if (list.length === 0) {
    return <Empty />;
  }
  if (list.length === 1) {
    return <SpecialNewsList item={list[0]} linkTarget={linkTarget} />;
  }
  if (list.length === 2) {
    const [firstArticle, sencodeArticle] = list;
    return (
      <div
        className="grid gap-6 grid-cols-1 md:grid-cols-2/1"
        // style={{
        //   gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
        // }}
      >
        <SpecialNewsList
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
  return <NewsList list={list} />;
}

function SpecialNewsList({
  item,
  linkTarget,
}: {
  item: INews;
  linkTarget: HTMLAttributeAnchorTarget;
}) {
  return (
    <>
      <NewsCardLatest linkTarget={linkTarget} key={item.id} item={item} />
      <NewsCard className="md:hidden" linkTarget={linkTarget} item={item} />
    </>
  );
}
