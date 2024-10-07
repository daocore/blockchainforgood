"use client";

import BC100Image from "@/assets/oscar/BC1000.png";
import InatbaImage from "@/assets/oscar/INATBA.png";
import PBPositiveBlockchainImage from "@/assets/oscar/PBPositiveBlockchain.io.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";
import { cn } from "@/lib";
import styles from "./styles.module.css";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useIsMobile } from "@/hooks";
import HemereImage from "@/assets/oscar/hemera-logo.webp";
import Image from "next/image";
import Link from "next/link";

export const partersData = [
  {
    approve: 0,
    id: "3",
    name: "BC100+",
    sort: 2,
    type: 1,
    logo: BC100Image,
    link: "https://bc100plus.org/",
    partnersType: 0,
    style: '{"height":"34px"}',
    mobileStyle: '{"height":"22px"}',
    createDate: "2023-01-17T06:40:21.384Z",
    updateDate: "2023-01-17T06:40:21.384Z",
  },
  {
    approve: 0,
    id: "4",
    name: "Inatba",
    sort: 0,
    type: 1,
    logo: InatbaImage,
    link: "https://inatba.org/",
    partnersType: 0,
    style: '{"height":"38px"}',
    mobileStyle: '{"height":"24px"}',
    createDate: "2023-01-17T06:40:21.388Z",
    updateDate: "2023-01-17T06:40:21.388Z",
  },
  {
    approve: 0,
    id: "104",
    name: "positive blockchain",
    sort: 0,
    type: 0,
    logo: PBPositiveBlockchainImage,
    link: "https://positiveblockchain.io/",
    partnersType: 0,
    style: '{"height": "24px"}',
    mobileStyle: '{"height":"18px"}',
    createDate: "2023-11-08T14:33:10.047Z",
    updateDate: "2023-11-08T14:33:10.047Z",
  },
];

export const Sponsors = () => {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );

  return (
    <div ref={ref}>
      <div className="text-center">
        <h2
          className={cn(
            styles["award-title"],
            "font-bold text-oscarActive font-['Inter'] inline-block mx-auto text-[20px] md:text-[32px] text-center"
          )}
        >
          Sponsor
        </h2>
      </div>
      <div
        className={`h-8 md:h-[42px] py-1 md:py-2 flex flex-col antialiased items-center justify-center relative overflow-hidden`}
      >
        <InfiniteMovingCards direction="left" speed="normal">
          {Array(10)
            ?.fill("Hemera")
            .map((item, index) => {
              return (
                <Link target="__blank" href="https://www.thehemera.com/">
                  <div
                    className="text-description mr-4 md:mr-8 flex items-center gap-2 font-['Inter'] text-sm md:text-base"
                    key={index}
                  >
                    <Image
                      src={HemereImage}
                      alt={item}
                      className="w-5 object-contain"
                      style={{ filter: "grayscale(1)" }}
                    />
                    <span>{item}</span>
                  </div>
                </Link>
              );
            })}
        </InfiniteMovingCards>
      </div>
    </div>
  );
};
