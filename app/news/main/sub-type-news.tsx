"use client";
import { useAPIGetNews } from "../api";
import { NEWS_TYPE_NAME } from "../constants";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { NewsList } from "./news-card";
import { NewsSkeletonList } from "../skeleton";
import { ROUTER_PATH } from "@/constants";

const NEWS_TYPE_LIST = Object.entries(NEWS_TYPE_NAME).map(([id, name]) => {
  return {
    id: +id,
    name,
  };
});

export function SubTypeNews() {
  return (
    <div>
      {NEWS_TYPE_LIST.map((item) => {
        return <SubTypeNewsItem key={item.id} id={item.id} name={item.name} />;
      })}
    </div>
  );
}

function SubTypeNewsItem({ id, name }: { id: number; name: string }) {
  const { data: { list = [] } = {}, isLoading } = useAPIGetNews({
    current: 1,
    pageSize: 3,
    type: id,
  });

  const router = useRouter();
  const onShowAllSubArticles = () => {
    router.push(`${ROUTER_PATH.NEWS.TYPE}${id}`);
  };
  return (
    <div className="mt-8">
      <h2
        onClick={onShowAllSubArticles}
        className="font-bold text-2xl cursor-pointer flex items-center mb-3"
      >
        {name}
        <ChevronRight size={18} className="text-main" />
      </h2>
      {isLoading ? <NewsSkeletonList /> : <NewsList list={list} />}
    </div>
  );
}
