"use client";
import { useAPIGetNews } from "../api";
import { LatestNewsList } from "./news-card";
import { NewsSkeletonList } from "../skeleton";

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
