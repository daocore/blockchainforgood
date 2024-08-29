"use client";

import Hackathon from "@/assets/hackathon.png";
import Incubation from "@/assets/incubation.png";
import Oscar from "@/assets/oscar.png";
import Web3KeyFund from "@/assets/web3key-fund.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib";
import Image from "next/image";
import styles from "./styles.module.css";
import { ROUTER_PATH } from "@/constants";
import { useRouter } from "next-nprogress-bar";

const forces = [
  {
    img: Hackathon,
    title: "Global Hackathons",
    path: ROUTER_PATH.HACKATHON,
    desc: "Partners will pool resources and join existing hackathons under the hackathon track “Blockchain for Good”. Winners from this track will then be invited to an exclusive finale hackathon hosted by BGA.",
  },
  {
    img: Incubation,
    title: "Incubation",
    path: ROUTER_PATH.INCUBATION,
    desc: "BGA Incubation aims to support projects that solve real-world problems using blockchain technology by providing expertise, resources, branding, and market support.",
  },
  {
    img: Oscar,
    title: "Web3 Oscar",
    path: ROUTER_PATH.OSCAR,
    desc: "Gathering Web3 believers and recognize their achievements in solving social problems. This will be a platform for believers to look forward to the future of Web3.",
  },
  {
    img: Web3KeyFund,
    title: "Web3Key Fund",
    desc: "Sponsoring builders/projects’ initiatives who use blockchain technology to impact the world.",
  },
];

export function How() {
  const ref = useIntersectionObserver<HTMLDivElement>(styles.moveFromBottom);
  const router = useRouter();

  return (
    <div
      ref={ref as any}
      className={cn("w-full md:w-content mx-auto text-center px-4 md:px-0")}
    >
      <h2 className="text-3xl font-bold">How</h2>
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {forces?.map((force) => {
          return (
            <div key={force.title} className={`space-y-2 shrink-0 ${force?.path ? "cursor-pointer" : "cursor-not-allowed"} group translate hover:scale-105 transition-all`} onClick={() => {
              force?.path && router.push(force?.path)
            }}>
              <Image
                alt={force.title}
                width={200}
                height={200}
                className="mx-auto"
                src={force.img}
              />
              <h4 className="text-base font-bold font-['Inter'] group-hover:text-bgaActive">
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
