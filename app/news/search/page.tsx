"use client";

import { ROUTER_PATH } from "@/constants";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAPIGetNewsInfinete } from "../api";
import { NewsList } from "../main/news-card";
import { useSearchParams } from "@/hooks";
import { useEffect, useRef } from "react";
import { PAGE_SIZE } from "../constants";
import { LoadingMore } from "@/components/Loading";
import { NewsSkeletonList } from "../skeleton";

export default function SearchPage() {
  const { q } = useSearchParams<"q">();

  const loader = useRef(null);
  const {
    data = [],
    isLoading,
    size,
    setSize,
  } = useAPIGetNewsInfinete({
    keyword: q,
    current: 1,
    pageSize: PAGE_SIZE,
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

  if (!q) {
    onBackToIndex();
    return (
      <p>
        There are no keywords to search for, it's going back to the homepage
      </p>
    );
  }

  const isEmpty = list.length === 0;
  return (
    <div className="w-full md:w-content mx-auto">
      <div>
        <span
          className="text-xs inline-flex cursor-pointer"
          onClick={onBackToIndex}
        >
          <ChevronLeft size={16} />
          Back to All news
        </span>
      </div>
      <h2 className="font-semibold text-lg cursor-pointer flex items-center mb-3 mt-6">
        Results for {q}
      </h2>
      {isLoading && <NewsSkeletonList />}
      {!isLoading && isEmpty && (
        <div className="text-text text-xs">
          <p>Make sure all words are spelled correctly</p>
          <p>Try different keywords</p>
          <p>Try more general keywords</p>
        </div>
      )}
      {!isLoading && !isEmpty && <NewsList list={list} />}
      {isLoadingMore && !isReachingEnd && <LoadingMore />}
      <div ref={loader} />
    </div>
  );
}
