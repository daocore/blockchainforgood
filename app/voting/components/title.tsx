import { cn } from "@/lib";
import { ReactNode } from "react";
import styles from "../styles.module.css";
import Image from "next/image";
import GroupLeft from "@/assets/vote/Group 3.png";
import GroupRight from "@/assets/vote/Group 4.png";

export function Title({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center -mt-8">
      <div
        className={cn(
          styles.title,
          "inline-flex items-center text-4xl gap-2 font-semibold"
        )}
      >
        <Image src={GroupLeft} alt="left" />
        {children}
        <Image src={GroupRight} alt="right" />
      </div>
    </div>
  );
}
