"use client";
import { ChevronLeft } from "lucide-react";
import { NEWS_TYPE_NAME, PAGE_SIZE } from "../../constants";
import { useAPIGetNewsInfinete } from "../../api";
import { Spin } from "@/components/Spin";
import { NewsList } from "../../main/news-card";
import { useRouter } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { useEffect, useRef } from "react";
import { LoadingMore } from "@/components/Loading";

export default function SubTypePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const typeName =
    NEWS_TYPE_NAME[+id as unknown as keyof typeof NEWS_TYPE_NAME];

  const loader = useRef(null);
  const {
    data = [],
    isLoading,
    size,
    setSize,
  } = useAPIGetNewsInfinete({
    current: 1,
    pageSize: PAGE_SIZE,
    type: +id,
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

  const router = useRouter();
  const onBackToIndex = () => {
    router.push(ROUTER_PATH.NEWS.ROOT);
  };

  return (
    <div className="w-content mx-auto">
      <div>
        <span
          className="text-xs inline-flex cursor-pointer"
          onClick={onBackToIndex}
        >
          <ChevronLeft size={16} />
          Back
        </span>
      </div>

      <h2 className="font-semibold text-lg cursor-pointer flex items-center mb-3">
        {typeName}
      </h2>
      {isLoading && <Spin />}
      {!isLoading && <NewsList list={list} />}
      {isLoadingMore && !isReachingEnd && <LoadingMore />}
      <div ref={loader} />
    </div>
  );
}
