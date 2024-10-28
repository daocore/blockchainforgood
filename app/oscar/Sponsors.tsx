"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";
import { cn } from "@/lib";
import styles from "./styles.module.css";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import HemereImage from "@/assets/oscar/hemera-logo.webp";
import PingoImage from "@/assets/oscar/PinGo.png";
import SendingLabsImage from "@/assets/oscar/Sending Labs.png";
import Image from "next/image";
import Link from "next/link";

const list = [
  {
    name: "Hemera",
    link: "https://www.thehemera.com/",
    image: HemereImage,
    style: { filter: "grayscale(1)" },
  },
  {
    name: "PinGo",
    link: "",
    image: PingoImage,
  },
  {
    name: "Sending Labs",
    link: "",
    image: SendingLabsImage,
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
          Sponsors
        </h2>
      </div>
      <div
        className={`h-28 py-1 md:py-2 flex items-center justify-center relative overflow-hidden`}
      >
        {list.map((item) => (
          <a
            target={item.link ? "_blank" : "_self"}
            href={item.link || undefined}
          >
            <div
              className="text-description mr-4 md:mr-8 flex items-center gap-2 font-['Inter'] text-sm md:text-base"
              key={item.name}
            >
              <Image
                src={item.image}
                alt={item.name}
                className="h-12 md:h-16 object-contain"
                style={item.style}
              />
              <span>{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
