"use client";

import { cn } from "@/lib";
import styles from "./index.module.css";
import Trophy2Image from "@/assets/oscar-ceremony/trophy2.png";
import Image, { StaticImageData } from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";
import { useIsSafari } from "@/hooks/useIsSafari";
import HarnImage from "@/assets/vote/result/Harn.png";
import MarianaImage from "@/assets/vote/result/Mariana.png";
import MilicaImage from "@/assets/vote/result/Milica.png";
import BreeAnneYekImage from "@/assets/vote/result/BreeAnne Yek.png";

const AWARD_LIST = [
  {
    name: "Collaboration Bridge Award ",
    ambassador: "Individual",
    prize: "Prize Worth $3000",
    users: [
      {
        img: HarnImage,
        name: "Harn",
        org: [
          {
            name: "Collaboration Bridge Award",
            title: "CEO, Trigger Asset Management",
          },
        ],
        link: "",
      },
    ],
  },
  {
    name: "Public Welfare Contribution Award",
    ambassador: "Individual",
    prize: "Prize Worth $1000",
    users: [
      {
        img: MarianaImage,
        name: "Mariana de la Roche W",
        org: [
          {
            name: "Board of Directors INATBA",
            title: "Founder of de la Roche W. Consulting",
          },
        ],
        link: "",
      },
      {
        img: MilicaImage,
        name: "Milica Dimitrijevic",
        org: [
          {
            name: "Blockchain for Good Alliance (BGA)",
            title: "Digital Innovation for Social Impact Advisor Partner",
          },
          {
            name: "PositiveBlockchain",
            title: "Program Lead",
          },
          {
            name: "BC100+",
            title: "Steering Committee Member",
          },
        ],
        link: "",
      },
      {
        img: BreeAnneYekImage,
        name: "BreeAnne Yek",
        org: [
          {
            name: "Advocate & Consultant",
            title: "Founder",
          },
        ],
        link: "",
      },
    ],
  },
  // {
  //   name: "BGA Ambassador Star",
  //   ambassador: "Ambassador",
  //   prize: "Prize Worth $300",
  //   users: [],
  // },
];

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
      {AWARD_LIST.map((award) => (
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
    <div ref={ref} className={cn("p-6 mt-6 space-y-4", styles["award-item"])}>
      <div className="flex">
        <Image
          height={80}
          // className={cn("h-20 w-auto mr-6", styles["trophy-gray"])}
          className={cn("h-20 w-auto mr-6")}
          src={Trophy2Image}
          alt="trophy"
        />
        <div className="flex flex-col justify-around">
          <h3
            className={cn(
              styles["award-name"],
              "text-xl md:text-[22px] font-semibold"
            )}
          >
            {item.name}
          </h3>
          <div
            className={cn("flex items-center gap-3 md:gap-6 whitespace-nowrap")}
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
      <div className="w-full h-0 border-b border-white/20"></div>
      <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-4 mt-3")}>
        {item.users.map((user) => (
          <UserAvater
            img={user.img}
            name={user.name}
            org={user.org}
            link={user.link}
          />
        ))}
      </div>
    </div>
  );
}

function UserAvater({
  img,
  name,
  org,
  link = "",
}: {
  img: string | StaticImageData;
  name: string;
  org: any[];
  link?: string;
}) {
  return (
    <a target="__blank" href={link || undefined}>
      <div className={cn("flex gap-2", styles.speaker)}>
        <Image
          width={56}
          height={56}
          className="w-14 h-14 rounded-full"
          src={img}
          alt="User"
        />
        <div>
          <p className={cn(styles.typ, "font-semibold")}>{name}</p>
          {org.map((item) => (
            <p className="text-xs">
              <span className={cn(styles.typ)}>{item.name}, </span>
              <span className={cn(styles["typ-description"])}>
                {item.title}
              </span>
            </p>
          ))}
        </div>
      </div>
    </a>
  );
}
