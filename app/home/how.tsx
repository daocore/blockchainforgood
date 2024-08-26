"use client";

import Hackathon from "@/assets/hackathon.png";
import Incubation from "@/assets/incubation.png";
import Oscar from "@/assets/oscar.png";
import Web3KeyFund from "@/assets/web3key-fund.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib";
import Image from "next/image";
import styles from "./styles.module.css";

const forces = [
  {
    img: Hackathon,
    title: "Global Hackathons",
    desc: "Partners will pool resources and join existing hackathons under the hackathon track “Blockchain for Good”. Winners from this track will then be invited to an exclusive finale hackathon hosted by BGA.",
  },
  {
    img: Incubation,
    title: "Incubation",
    desc: "BGA Incubation aims to support projects that solve real-world problems using blockchain technology by providing expertise, resources, branding, and market support.",
  },
  {
    img: Oscar,
    title: "Web3 Oscar",
    desc: "Gathering Web3 believers and recognize their achievements in solving social problems. This will be a platform for believers to look forward to the future of Web3.",
  },
  {
    img: Web3KeyFund,
    title: "Web3Key Fund",
    desc: "Sponsoring builders/projects’ initiatives who use blockchain technology to impact the world.",
  },
];

export function How() {
  const ref = useIntersectionObserver<HTMLDivElement>(
    styles.moveFromRightBottom
  );
  return (
    <div
      ref={ref as any}
      className={cn("w-full md:w-content mx-auto text-center")}
    >
      <h2 className="text-3xl font-bold">How</h2>
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {forces?.map((force, index) => {
          return (
            <div key={force.title} className="space-y-2 shrink-0">
              <Image
                alt={force.title}
                width={200}
                height={200}
                className="mx-auto"
                src={force.img}
              />
              <h4 className="text-base font-bold font-['Inter']">
                {force?.title}
              </h4>
              <p className="grow shrink basis-0 text-typography text-base font-normal font-['Inter']">
                {force?.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
