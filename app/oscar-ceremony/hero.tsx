"use client";

import { cn } from "@/lib";
import styles from "./index.module.css";
import Image from "next/image";
import HeroLeftImage from "@/assets/oscar-ceremony/hero-left.png";
import HeroLeftFullImage from "@/assets/oscar-ceremony/hero-left-full.png";
import HeroRightImage from "@/assets/oscar-ceremony/hero-right.png";
import HeroRightFullImage from "@/assets/oscar-ceremony/hero-right-full.png";
import HeroTrophyImage from "@/assets/oscar-ceremony/hero-trophy.png";
import { useState } from "react";
export function Hero() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="relative flex -mt-20 max-h-[720px]">
      {/*left  */}
      <div
        className={cn(
          "flex w-2/5 flex-none relative z-10",
          styles["hero-left"],
          isHover && "w-3/5"
        )}
        onMouseEnter={(e) => setIsHover(true)}
        onMouseLeave={(e) => setIsHover(false)}
      >
        <Image
          className="h-full object-cover"
          // src={isHover ? HeroLeftFullImage : HeroLeftImage}
          src={HeroLeftFullImage}
          alt="17 SDGS"
        />
      </div>
      {/* right */}
      <div className={cn("w-full -ml-36", styles["hero-right"])}>
        <Image
          className="h-full object-cover"
          // src={isHover ? HeroRightImage : HeroRightFullImage}
          src={HeroRightFullImage}
          alt="Web3.0 Oscar"
        />
      </div>
      {/* 🏆 */}
      <div
        className={cn(
          "absolute h-full top-[10%] left-[35%] z-20",
          isHover && "left-[60%]"
        )}
      >
        <Image
          className="h-4/5 object-contain -translate-x-1/2"
          src={HeroTrophyImage}
          alt="trophy"
        />
      </div>
    </div>
  );
}
