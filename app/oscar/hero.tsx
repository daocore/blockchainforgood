"use client";

import { cn } from "@/lib";
import styles from "../oscar-ceremony/index.module.css";
import Image from "next/image";
import HeroLeftFullImage from "@/assets/oscar-ceremony/hero-left-full1.png";
import OscarGlobeImage from "@/assets/oscar/BGA Oscar Globe Only.png";
import { Dispatch, SetStateAction, useState } from "react";

export function Hero({
  onChange,
}: {
  onChange: Dispatch<SetStateAction<boolean>>;
}) {
  const [isHover, setIsHover] = useState(true);

  const onHoverLeft = () => {
    setIsHover(true);
    onChange(false);
  };

  const onHoverRight = () => {
    setIsHover(false);
    onChange(true);
  };
  return (
    <div className="relative flex flex-col md:flex-row -mt-20 h-screen">
      {/*left  */}
      <div
        className={cn(
          "flex flex-none w-full md:h-full relative z-10 transition-all duration-200",
          styles["hero-left"],
          isHover ? "md:w-[70%] h-[80%]" : "md:w-[40%] h-[40%]"
        )}
        onMouseEnter={onHoverLeft}
        onClick={onHoverLeft}
      >
        <Image
          className={cn(
            "w-full h-full object-center md:object-left-top object-cover"
          )}
          src={HeroLeftFullImage}
          alt="17 SDGS"
        />
        <div
          className={cn(
            "absolute z-10 w-full md:w-auto bottom-48 md:bottom-1/2 translate-y-1/2",
            isHover ? "md:left-32" : "md:right-64"
          )}
        >
          <div
            className={cn(
              "flex justify-center gap-1 md:block font-extrabold md:text-5xl",
              isHover ? "text-3xl" : "text-base"
            )}
          >
            <p className={cn(styles["hero-title"])}>17 SDGS</p>
            <p className={cn("leading-tight", styles["hero-title"])}>
              Challenge
            </p>
          </div>
          <p
            className={cn(
              "md:text-xl text-center md:text-left",
              styles["hero-description"],
              isHover && "text-sm md:text-xl"
            )}
          >
            Sustainable Innovation Summit
          </p>
        </div>
      </div>
      {/* right */}
      <div
        className={cn(
          "w-full h-full -mt-32 md:mt-0 md:-ml-64 relative transition-all duration-200"
        )}
        onMouseEnter={onHoverRight}
        onClick={onHoverRight}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "w-full h-full object-cover",
            isHover
              ? "object-right-bottom md:object-left-top"
              : "object-left-top md:object-right-bottom"
          )}
        >
          <source
            src="/BGA Ceremony Animation-Background blur.webm"
            type="video/webm"
          />
        </video>
        {isHover && (
          <Image
            className={cn(
              "absolute z-10 top-0 left-1/2 md:left-0 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 transform-all",
              isHover
                ? "w-32 h-32 md:w-64 md:h-64"
                : "-top-4 w-64 h-64 md:w-96 md:h-96"
            )}
            src={OscarGlobeImage}
            alt="oscar globe"
          />
        )}
        {!isHover && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className={cn(
              "absolute z-10 top-0 left-1/2 md:left-0 md:top-1/2 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 transform-all",
              isHover
                ? "w-32 h-32 md:w-64 md:h-64"
                : "-top-4 w-64 h-64 md:w-96 md:h-96"
            )}
          >
            <source
              src="/BGA-Oscar-Static-Globe-Text-Animated.webm"
              type="video/webm"
            />
          </video>
        )}

        <div
          className={cn(
            "absolute right-0 bottom-1/3 md:bottom-1/2  md:translate-y-1/2 text-right",
            isHover ? "w-full md:w-auto md:right-10" : "w-auto md:right-64"
          )}
        >
          <div
            className={cn(
              "w-full flex gap-1 justify-center md:block font-extrabold md:text-4xl",
              isHover ? "text-base " : "text-3xl"
            )}
          >
            <p className={cn("leading-tight", styles["hero-title"])}>
              The Chains
            </p>
            <p className={cn("leading-tight", styles["hero-title"])}>
              of Change
            </p>
          </div>

          <div
            className={cn(
              "flex justify-center md:justify-between md:text-sm mt-2 leading-none divide-x divide-oscarActive",
              styles["hero-description"],
              isHover && "text-xs"
            )}
          >
            <span className="px-2 leading-none">November 11th, 2024</span>
            <span className="px-2 leading-none">Bangkok, Thailand</span>
          </div>
          <div
            className={cn(
              "w-screen md:w-full px-4 md:px-0 md:mt-14",
              isHover && "hidden md:block",
              !isHover && "mt-4"
            )}
          >
            <div
              className={cn(
                "inline-flex justify-center items-center w-full font-bold cursor-pointer py-1 md:py-2 relative overflow-hidden",
                styles["hero-button"]
              )}
            >
              REGISTER HERE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
