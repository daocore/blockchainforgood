import Image from "next/image";
import CommitteeImage from "@/assets/incubation/committee.png";
import { cn } from "@/lib";
import { VerticalLine } from "./vertical-line";
import styles from "./incubation.module.css";

const COMMITTEE_LIST = [
  {
    title: "Light Incubation",
    hasGrant: false,
    list: [
      "Marketing",
      "Branding",
      "Community",
      "Advisory - Legal & Compliance",
      "Other Supports if needed",
    ],
    dotClassName: styles["glow-dot4"],
    cardClassName: styles["blinker-committee1"],
  },
  {
    title: "Moderate Incubation",
    hasGrant: true,
    list: [
      "Marketing",
      "Branding",
      "Community",
      "Advisory - Competitor & Legal & Compliance",
      "Kol Resources",
      "Investment Resources",
      "Grants",
      "Other Supports if needed",
    ],
    dotClassName: styles["glow-dot6"],
    cardClassName: styles["blinker-committee2"],
  },
  {
    title: "Incentive Incubation",
    hasGrant: true,
    list: [
      "Marketing",
      "Branding",
      "Community",
      "Advisory - All",
      "Kol Resources",
      "Investment Resources",
      "Listing Resources",
      "Market Makers’ Resources",
      "Grants",
      "Other Supports if needed",
    ],
    dotClassName: styles["glow-dot5"],
    cardClassName: styles["blinker-committee3"],
  },
];

export function Committee() {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          className="animate-blinker-image rounded-full"
          src={CommitteeImage}
          alt="Committee"
          width={126}
          height={125}
        />
      </div>
      <div>
        <TitleCard />
        <IncubationList />
      </div>
    </div>
  );
}

function TitleCard() {
  return (
    <div className="w-full md:w-[290px] box-content h-11 mx-auto text-center border border-main py-2 bg-incubation relative z-10">
      <h2 className="font-bold text-white">BGA Projects Committee</h2>
      <p className="text-sm text-white">Score and Feedbacks</p>
    </div>
  );
}

function IncubationList() {
  return (
    <div className="grid gap-4 grid-cols-1 xs:grid-cols-3">
      {COMMITTEE_LIST.map((item, index) => (
        <IncubationCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}

function IncubationCard({ item, index }: { item: any; index: number }) {
  const { title, list, hasGrant, dotClassName, cardClassName } = item;
  const isFirst = index === 0;
  const isLast = index === 2;
  return (
    <div>
      <VerticalLine
        className={cn(
          "hidden xs:block w-0 mx-auto",
          isFirst && "block",
          isFirst && styles["line-card-right"],
          isLast && styles["line-card-left"]
        )}
        dotClassName={dotClassName}
      />
      <div
        className={cn(
          "relative overflow-hidden border border-main p-4 h-auto xs:h-[calc(100%_-_60px)] animate-blinker-border",
          cardClassName
        )}
      >
        <h2 className="text-white font-bold w-1/2">{title}</h2>
        <ul className="list-disc ml-5">
          {list.map((desc: string, index: number) => (
            <li
              className={cn(
                "text-sm text-description my-3",
                index === list.length - 1 && "mb-0"
              )}
              key={desc}
            >
              {desc}
            </li>
          ))}
        </ul>
        {hasGrant && (
          <div className={styles["corner-ribbon"]}>
            BGA <br className="hidden xs:inline md:hidden" /> Incubation Grant
          </div>
        )}
      </div>
    </div>
  );
}
