"use client";

import { cn } from "@/lib";
import styles from "./index.module.css";
import TrophyImage from "@/assets/oscar-ceremony/trophy.png";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";

const AWARD_LIST = [
  {
    name: "冠军",
    ambassador: "ambassador",
    prize: "prize worth 300 U",
    tags: [
      "Hat, clothing, badges",
      "$2000 Travel Expense Reimbursement",
      "$200 gift card equivalent",
    ],
  },
  {
    name: "亚军",
    ambassador: "ambassador",
    prize: "prize worth 300 U",
    tags: [
      "Hat, clothing, badges",
      "$2000 Travel Expense Reimbursement",
      "$200 gift card equivalent",
    ],
  },
] as const;

export function Award() {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div ref={ref} id="award" className="pt-6 px-2 md:px-0">
      <div className="text-center">
        <h2
          className={cn(
            styles["award-title"],
            "text-oscarActive inline-block mx-auto text-center text-xl md:text-3xl font-semibold"
          )}
        >
          Award
        </h2>
      </div>
      {AWARD_LIST.map((award, index) => (
        <AwardItem key={award.name} item={award} isFirst={index === 0} />
      ))}
    </div>
  );
}

function AwardItem({
  item,
  isFirst,
}: {
  item: (typeof AWARD_LIST)[number];
  isFirst: boolean;
}) {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div
      ref={ref}
      className={cn(
        "flex gap-2 items-center p-6 mt-6",
        styles["award-item"],
        isFirst && styles["award-first"]
      )}
    >
      <Image
        height={80}
        className={cn("h-20 w-auto", !isFirst && styles["trophy-gray"])}
        src={TrophyImage}
        alt="trophy"
      />
      <div>
        <h3 className={cn(styles["award-name"], "text-xl md:text-2xl mb-2")}>
          {item.name}
        </h3>
        <div
          className={cn(
            "flex justify-around items-center gap-1 whitespace-nowrap"
          )}
        >
          <span className={cn(styles["award-description"])}>
            {item.ambassador}
          </span>
          <span
            style={{
              width: "1px",
              borderRight: "1px solid #2D3541",
            }}
            className="py-1 flex-none h-4"
          ></span>
          <span className={cn(styles["award-description"])}>{item.prize}</span>
        </div>
      </div>
      <div
        className={cn("w-0 py-6 hidden md:block", styles["award-line"])}
      ></div>
      <div className=" hidden md:flex flex-wrap gap-2 h-min">
        {item.tags.map((tag, index) => (
          <div
            key={tag}
            className={cn(
              styles["award-tag"],
              "px-4 py-1 rounded-full text-sm whitespace-nowrap"
            )}
          >{`${index + 1}. ${tag}`}</div>
        ))}
      </div>
      <Button
        className={cn(
          "hidden md:block px-4 rounded-none",
          styles["award-btn-rule"]
        )}
      >
        <span>Rule</span>
      </Button>
      <Button
        className={cn(
          "hidden md:block px-8 rounded-none",
          styles["award-btn-apply"]
        )}
      >
        <span>Apply</span>
      </Button>
    </div>
  );
}
