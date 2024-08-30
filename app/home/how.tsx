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
    desc: 'Our partners come together to combine resources and organize global hackathons under the "Blockchain for Good" track with themes that foster innovation and drive impactful solutions toward global development. Winners earn the opportunity to showcase their projects.',
  },
  {
    img: Incubation,
    title: "Incubation",
    path: ROUTER_PATH.INCUBATION,
    desc: "Our incubation program is dedicated to nurturing blockchain projects that address real-world challenges. We provide comprehensive support, including expert guidance, resources, branding, and market access, to help these projects thrive and create lasting impact.",
  },
  {
    img: Oscar,
    title: "Web3 Oscar",
    path: ROUTER_PATH.OSCAR,
    desc: "Inspired by the Oscars, BGA's Web3 Oscar celebrates the visionaries and innovators in the Web3 space who are making a difference. This event recognizes outstanding achievements in solving social challenges using blockchain and provides a platform for the community to envision the future of Web3.",
  },
  {
    img: Web3KeyFund,
    title: "Web3Key Fund",
    desc: "The BGA Web3Key Fund is committed to empowering projects and initiatives that leverage blockchain technology to make a positive impact. Through strategic sponsorships, we support builders who are using Web3 to create a better world for all.",
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
            <div
              key={force.title}
              className={`space-y-2 shrink-0 ${
                force?.path ? "cursor-pointer" : "cursor-not-allowed"
              } group translate hover:scale-105 transition-all`}
              onClick={() => {
                force?.path && router.push(force?.path);
              }}
            >
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
