import Image from "next/image";
import HightlightsImage from "@/assets/vote/result/highlights.png";
import homeStyles from "@/app/home/styles.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Highlights() {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div className="w-full md:w-content mx-auto" ref={ref}>
      <Image src={HightlightsImage} alt="highlights" />
    </div>
  );
}
