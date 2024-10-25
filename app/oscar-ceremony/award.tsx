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
      "BGA Merchandise Package (A complete set of exclusive BGA merchandise, including a hat, clothing, and badges)",
      "On-Chain Certificate (Receive a digital certificate verifying your participation, securely recorded on the blockchain)",
      "Bangkok Trip Reimbursement (A $2000 reimbursement for your trip to Bangkok)",
    ],
    buttons: [
      (isSafari: boolean) => (
        <Button className={cn("px-4 rounded-none", styles["award-btn-rule"])}>
          <span
            className={cn(
              isSafari ? "text-description" : styles["award-btn-rule-span"]
            )}
          >
            Rules
          </span>
        </Button>
      ),
      () => (
        <Button
          className={cn(
            "px-8 rounded-none opacity-70",
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
      "BGA Merchandise Package (A complete set of exclusive BGA merchandise, including a hat, clothing, and badges)",
      "On-Chain Certificate (Receive a digital certificate verifying your participation, securely recorded on the blockchain)",
      "$500 Cash Reward (A cash prize awarded to the winner)",
    ],
    buttons: [
      (isSafari: boolean) => (
        <Button className={cn("px-4 rounded-none", styles["award-btn-rule"])}>
          <span
            className={cn(
              isSafari ? "text-description" : styles["award-btn-rule-span"]
            )}
          >
            Rules
          </span>
        </Button>
      ),
      () => (
        <Link
          target="__blank"
          href={`${ROUTER_PATH.FORM.PERSON}/${OSCAR_CONTRIBUTION_AWARD_EVENT_ID}`}
        >
          <Button
            className={cn("px-8 rounded-none", styles["award-btn-apply"])}
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
      "$150 Gift (Choose from a selection of exciting items: Michelle Retro Speaker, JBL Sports Speaker, Apple Gift Card, Amazon Gift Card)",
      "BGA Merchandise Package (A complete set of exclusive BGA merchandise, including a hat, clothing, and badges)",
      "On-Chain Certificate (Receive a digital certificate verifying your participation, securely recorded on the blockchain)",
    ],
    buttons: [
      (isSafari: boolean) => (
        <Button className={cn("px-4 rounded-none", styles["award-btn-rule"])}>
          <span
            className={cn(
              isSafari ? "text-description" : styles["award-btn-rule-span"]
            )}
          >
            Rules
          </span>
        </Button>
      ),
      () => (
        <Link
          target="__blank"
          href={`${ROUTER_PATH.FORM.PERSON}/${HACKTHON_APPLY_EVENT_ID}`}
        >
          <Button
            className={cn("px-8 rounded-none", styles["award-btn-apply"])}
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
      className="w-full md:w-content mx-auto pt-6 px-2 md:px-0"
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
        "flex flex-col md:flex-row gap-6 items-center p-6 mt-6",
        styles["award-item"]
      )}
    >
      <div className="flex gap-2 mr-3 w-80 flex-none">
        <Image
          height={80}
          className={cn("h-20 w-auto", styles["trophy-gray"])}
          src={TrophyImage}
          alt="trophy"
        />
        <div className="flex flex-col justify-around">
          <h3 className={cn(styles["award-name"], "text-xl md:text-2xl mb-2")}>
            {item.name}
          </h3>
          <div
            className={cn(
              "flex justify-around items-center gap-1 whitespace-nowrap"
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
                borderRight: "1px solid #2D3541",
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
      <div className="flex flex-wrap gap-2 h-min">
        {item.tags.map((tag, index) => (
          <div
            key={tag}
            className={cn(
              styles["award-tag"],
              "px-6 py-2 md:px-4 md:py-1 rounded-full text-sm"
            )}
          >{`${index + 1}. ${tag}`}</div>
        ))}
      </div>
      <div className="flex gap-2">
        {item.buttons.map((fn, index) => fn(isSafari))}
      </div>
    </div>
  );
}
