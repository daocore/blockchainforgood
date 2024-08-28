"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import styles from "./styles.module.css";
import { useIsMobile } from "@/hooks";

export const Prizes = () => {
  const mobile = useIsMobile();

  return (
    <div className={`h-8 md:h-[42px] py-1 md:py-2 flex flex-col antialiased items-center justify-center relative overflow-hidden ${mobile ? styles.prizeBgMb : styles.prizeBg}`}>
      <InfiniteMovingCards
        direction="left"
        speed="normal"
      >
        {Array(10)?.fill("$100,000").map((item, index) => {
          return <div
            className="text-oscorBlack mr-4 md:mr-8 flex items-center gap-6 md:gap-10 font-black font-['Inter'] text-sm md:text-xl"
            key={index}>
            <span className="text-oscorBlack">✧</span>
            <span>Prize:{item}</span>
          </div>
        })}
      </InfiniteMovingCards>
    </div>
  );
}


