"use client";

import { cn } from "@/lib";
import styles from "./index.module.css";
import TrophyImage from "@/assets/oscar-ceremony/trophy.png";
import Image from "next/image";
import { Button } from "@/components/ui";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";
import Link from "next/link";
import {
  HACKTHON_APPLY_EVENT_ID,
  OSCAR_CONTRIBUTION_AWARD_EVENT_ID,
  ROUTER_PATH,
} from "@/constants";
import { useIsSafari } from "@/hooks/useIsSafari";

const AWARD_LIST = [
  {
    name: "Collaboration Bridge Award ",
    ambassador: "Individual",
    prize: "Prize Worth $3000",
    tags: [
      "BGA Merchandise Package",
      "On-Chain Certificate",
      "Bangkok Trip Reimbursement",
    ],
    buttons: [
      (isSafari: boolean) => (
        <Link
          target="__blank"
          href="https://www.blockchainforgood.xyz/news/detail/41d6b262-ad52-48ba-a76a-e0337284412b"
        >
          <Button className={cn("px-4 rounded-none", styles["award-btn-rule"])}>
            <span
              className={cn(
                isSafari ? "text-description" : styles["award-btn-rule-span"]
              )}
            >
              Rules
            </span>
          </Button>
        </Link>
      ),
      () => (
        <Button
          className={cn(
            "px-8 rounded-none opacity-70 w-44",
            styles["award-btn-invatation"]
          )}
        >
          <span>Exclusive Invitation</span>
        </Button>
      ),
    ],
  },
  {
    name: "Public Welfare Contribution Award",
    ambassador: "Individual",
    prize: "Prize Worth $1000",
    tags: [
      "BGA Merchandise Package",
      "On-Chain Certificate",
      "$500 Cash Reward",
    ],
    buttons: [
      (isSafari: boolean) => (
        <Link
          target="__blank"
          href="https://www.blockchainforgood.xyz/news/detail/41d6b262-ad52-48ba-a76a-e0337284412b"
        >
          <Button className={cn("px-4 rounded-none", styles["award-btn-rule"])}>
            <span
              className={cn(
                isSafari ? "text-description" : styles["award-btn-rule-span"]
              )}
            >
              Rules
            </span>
          </Button>
        </Link>
      ),
      () => (
        <Link
          target="__blank"
          href={`${ROUTER_PATH.FORM.PERSON}/${OSCAR_CONTRIBUTION_AWARD_EVENT_ID}`}
        >
          <Button
            className={cn("px-8 rounded-none w-44", styles["award-btn-apply"])}
          >
            <span>Apply</span>
          </Button>
        </Link>
      ),
    ],
  },
  {
    name: "BGA Ambassador Star",
    ambassador: "Ambassador",
    prize: "Prize Worth $300",
    tags: [
      "BGA Merchandise Package",
      "On-Chain Certificate",
      "$500 Cash Reward",
    ],
    buttons: [
      (isSafari: boolean) => (
        <Link
          target="__blank"
          href="https://www.blockchainforgood.xyz/news/detail/41d6b262-ad52-48ba-a76a-e0337284412b"
        >
          <Button className={cn("px-4 rounded-none", styles["award-btn-rule"])}>
            <span
              className={cn(
                isSafari ? "text-description" : styles["award-btn-rule-span"]
              )}
            >
              Rules
            </span>
          </Button>
        </Link>
      ),
      () => (
        <Link
          target="__blank"
          href={`${ROUTER_PATH.FORM.PERSON}/${HACKTHON_APPLY_EVENT_ID}`}
        >
          <Button
            className={cn("px-8 rounded-none w-44", styles["award-btn-apply"])}
          >
            <span>Apply</span>
          </Button>
        </Link>
      ),
    ],
  },
] as const;

export function Award() {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div
      ref={ref}
      id="award"
      className="hash-section w-full md:w-content mx-auto pt-6 px-2 md:px-0"
    >
      <div className="text-center">
        <h2
          className={cn(
            styles["award-title"],
            "text-oscarActive inline-block mx-auto text-center text-xl md:text-3xl font-semibold"
          )}
        >
          Awards
        </h2>
      </div>
      {AWARD_LIST.map((award, index) => (
        <AwardItem key={award.name} item={award} />
      ))}
    </div>
  );
}

function AwardItem({ item }: { item: (typeof AWARD_LIST)[number] }) {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );

  const isSafari = useIsSafari();
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col md:flex-row md:justify-between gap-6 items-center p-6 mt-6",
        styles["award-item"]
      )}
    >
      <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-0 w-full items-center">
        <div className="flex">
          <Image
            height={80}
            className={cn("h-20 w-auto mr-6", styles["trophy-gray"])}
            src={TrophyImage}
            alt="trophy"
          />
          <div className="flex flex-col justify-around md:w-80">
            <h3
              className={cn(
                styles["award-name"],
                "text-xl md:text-[22px] font-semibold mb-2"
              )}
            >
              {item.name}
            </h3>
            <div
              className={cn(
                "flex items-center gap-3 md:gap-6 whitespace-nowrap"
              )}
            >
              <span
                className={cn(
                  isSafari ? "text-description" : styles["award-description"]
                )}
              >
                {item.ambassador}
              </span>
              <span
                style={{
                  width: "1px",
                  borderRight: "1px solid #B6B6BF",
                }}
                className="py-1 flex-none h-4"
              ></span>
              <span
                className={cn(
                  isSafari ? "text-description" : styles["award-description"]
                )}
              >
                {item.prize}
              </span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "w-full border-b border-oscarActive md:w-0 md:h-10 md:border-l"
          )}
        />
        <div className="flex flex-wrap gap-2 h-min md:w-[403px]">
          {item.tags.map((tag, index) => (
            <div
              key={tag}
              className={cn(
                styles["award-tag"],
                "px-6 py-1 md:px-4 md:py-2 rounded-full text-sm"
              )}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-none space-x-2">
        {item.buttons.map((fn, index) => fn(isSafari))}
      </div>
    </div>
  );
}
