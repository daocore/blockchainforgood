"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import homeStyles from "../home/styles.module.css";
import { cn } from "@/lib";
import styles from "./styles.module.css";
import HemereImage from "@/assets/oscar/hemera-logo.webp";
import PingoImage from "@/assets/oscar/PinGo.png";
import SendingLabsImage from "@/assets/oscar/Sending Labs.png";
import Image from "next/image";

const list = [
  {
    name: "Hemera",
    link: "https://www.thehemera.com/",
    image: HemereImage,
    style: { filter: "grayscale(1)", height: "4rem" },
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
    <div className="w-full md:w-content" ref={ref}>
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
            className="flex justify-center w-1/3"
          >
            <div
              className="text-description mr-4 md:mr-8 flex items-center gap-2 font-['Inter'] text-sm md:text-base"
              key={item.name}
            >
              <Image
                src={item.image}
                alt={item.name}
                className="h-12 md:h-14 w-auto object-contain"
                style={item.style}
              />
              <span className="text-xl font-semibold">{item.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
