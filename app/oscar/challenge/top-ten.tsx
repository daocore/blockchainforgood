import TopTenProjectImage from "@/assets/vote/result/PROJ.png";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import homeStyles from "@/app/home/styles.module.css";
import { cn } from "@/lib";
import styles from "../styles.module.css";

export function TopTen() {
  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div className="w-full md:w-content mx-auto" ref={ref}>
      <div className="text-center">
        <h2
          className={cn(
            styles["award-title"],
            "text-oscarActive md:!w-80 tracking-tighter inline-block mx-auto text-center text-xl md:text-3xl font-semibold"
          )}
        >
          Top10 Projects
        </h2>
      </div>
      <Image src={TopTenProjectImage} alt="top 10 projects" />
    </div>
  );
}
