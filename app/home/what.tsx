"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib";
import styles from "./styles.module.css";

export function What() {
  const ref = useIntersectionObserver<HTMLDivElement>(styles.moveFromBottom);
  return (
    <div
      ref={ref as any}
      className={cn(
        "w-full max-w-3xl mx-auto text-center space-y-2 px-4 md:px-0"
      )}
    >
      <h2 className="text-3xl font-bold">What We Do</h2>
      <h3 className="text-3xl font-bold text-main">Care. Create. Change.</h3>
      <p className="text-typography">
        At the Blockchain for Good Alliance (BGA), we harness the transformative
        power of blockchain technology to tackle some of the most critical
        challenges facing societies and the world at large today.
      </p>
      <p className="text-typography">
        As a dynamic and collaborative hub, BGA unites a diverse network of
        stakeholders to drive innovation and implement blockchain-based
        solutions that contribute to social good.
      </p>
      <p className="text-typography">
        Together, we explore new frontiers, create impactful initiatives, and
        foster meaningful change on a global scale.
      </p>
    </div>
  );
}
