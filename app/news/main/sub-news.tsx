"use client";
import { Spin } from "@/components/Spin";
import { useAPIGetNews } from "../api";
import { ARTICLE_TYPE_NAME } from "../constants";
import { ChevronRight, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { ArticleList } from "./article-card";

const ARTICLE_TYPE_LIST = Object.entries(ARTICLE_TYPE_NAME).map(
  ([id, name]) => {
    return {
      id: +id,
      name,
    };
  }
);

export function SubArticles() {
  return (
    <div>
      {ARTICLE_TYPE_LIST.map((item) => {
        return <SubArticlesItem key={item.id} id={item.id} name={item.name} />;
      })}
    </div>
  );
}

function SubArticlesItem({ id, name }: { id: number; name: string }) {
  const { data: { list = [], total = 0 } = {}, isLoading } = useAPIGetNews({
    current: 1,
    pageSize: 3,
    type: id,
  });

  const router = useRouter();
  const onShowAllSubArticles = () => {
    router.push(`/news/type/${id}`);
  };
  return (
    <div className="mt-3">
      <h2
        onClick={onShowAllSubArticles}
        className="font-semibold text-lg cursor-pointer flex items-center mb-3"
      >
        {name}
        <ChevronRight size={18} className="text-main" />
      </h2>
      {isLoading ? <Spin /> : <ArticleList list={list} />}
    </div>
  );
}
