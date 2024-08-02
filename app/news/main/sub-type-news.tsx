"use client";
import { useAPIGetNews } from "../api";
import { NEWS_TYPE_NAME } from "../constants";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { LatestNewsList } from "./news-card";
import { NewsSkeletonList } from "../skeleton";
import { ROUTER_PATH } from "@/constants";
import { NEWS_TYPE } from "../enums";

const NEWS_TYPE_LIST = [
  {
    id: NEWS_TYPE.RREAL_TALK_CASE_STUDY,
    name: NEWS_TYPE_NAME[NEWS_TYPE.RREAL_TALK_CASE_STUDY],
  },
  {
    id: NEWS_TYPE.BGA_PROGRESS_PULSE,
    name: NEWS_TYPE_NAME[NEWS_TYPE.BGA_PROGRESS_PULSE],
  },
  { id: NEWS_TYPE.BFG_BGA, name: NEWS_TYPE_NAME[NEWS_TYPE.BFG_BGA] },
  { id: NEWS_TYPE.BYBIT_BGA, name: NEWS_TYPE_NAME[NEWS_TYPE.BYBIT_BGA] },
  { id: NEWS_TYPE.KLIMADAO_BGA, name: NEWS_TYPE_NAME[NEWS_TYPE.KLIMADAO_BGA] },
];

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
      {isLoading ? <NewsSkeletonList /> : <LatestNewsList list={list} />}
    </div>
  );
}
