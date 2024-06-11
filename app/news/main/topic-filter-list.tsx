import { useContext, useEffect, useRef } from "react";
import { TopicContext } from "../context";
import { useAPIGetNewsInfinete } from "../api";
import { Spin } from "@/components/Spin";
import { ArticleList } from "./article-card";
import { PAGE_SIZE } from "../constants";
import { LoadingMore } from "@/components/Loading";

export function TopicFilterList() {
  const { activeTopic } = useContext(TopicContext)!;

  const loader = useRef(null);
  const {
    data = [],
    isLoading,
    size,
    setSize,
  } = useAPIGetNewsInfinete({
    tags: activeTopic!,
    current: 1,
    pageSize: 20,
  });

  const list = data ? [].concat(...data) : [];
  const isLoadingMore =
    size > 1 && data && typeof data[size - 1] === "undefined";
  // no more data
  const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE;
  useEffect(() => {
    if (isLoading || !loader.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSize((prev) => prev + 1);
      }
    });
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [isLoading]);

  if (isLoading) {
    return <Spin />;
  }
  return (
    <div>
      <ArticleList list={list} />
      {isLoadingMore && !isReachingEnd && <LoadingMore />}
      <div ref={loader} />
    </div>
  );
}
