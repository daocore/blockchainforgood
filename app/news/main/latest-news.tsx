"use client";
import { Spin } from "@/components/Spin";
import { useAPIGetNews } from "../api";
import { IArticle } from "../types";
import { ArticleCard, ArticleCardLatest } from "./article-card";
import { Empty } from "@/components/Empty";

export function LatestNews() {
  const { data: { list = [], total = 0 } = {}, isLoading } = useAPIGetNews({
    current: 1,
    pageSize: 3,
  });

  return (
    <div>
      <h2 className="font-semibold text-lg">Latest</h2>
      {isLoading ? <Spin /> : <ArticleList list={list} />}
    </div>
  );
}

function ArticleList({ list }: { list: IArticle[] }) {
  if (list.length === 0) {
    return <Empty />;
  }
  if (list.length === 1) {
    const [item] = list;
    return (
      <div className="grid grid-cols-1">
        <ArticleCardLatest key={item.id} item={item} />
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
        <ArticleCardLatest key={firstArticle.id} item={firstArticle} />
        <ArticleCard key={sencodeArticle.id} item={sencodeArticle} />
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-3">
      {list.map((item) => (
        <ArticleCard key={item.id} item={item} />
      ))}
    </div>
  );
}
