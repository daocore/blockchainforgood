import { cn } from "@/lib";
import { VerticalLine } from "./vertical-line";
import styles from "./incubation.module.css";

const ENTRY_LIST = [
  {
    title: "Hackathon Projects",
    isActive: false,
  },
  {
    title: "Proactive Registration",
    isActive: true,
    dotClassName: styles["glow-dot2"],
    className: styles["blinker-committee4"],
  },
];

export function EntryPoints() {
  return (
    <div className="flex flex-col items-center">
      <VerticalLine dotClassName={styles["glow-dot1"]} />
      <div className="flex justify-center w-full">
        {ENTRY_LIST.map((entry, index) => (
          <EntryCard key={entry.title} {...entry} />
        ))}
      </div>
      <VerticalLine dotClassName={styles["glow-dot3"]} />
    </div>
  );
}

function EntryCard({
  title,
  className,
  dotClassName,
  isActive,
}: {
  title: string;
  className?: string;
  dotClassName?: string;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "w-2/5 xs:w-[25vw] md:w-1/3 max-w-[112px] xs:max-w-[203px] md:max-w-[419px] h-[102px] border border-typography relative",
        isActive && "border-main border-l-0",
        !isActive && "border-r-0"
      )}
    >
      <div
        className={cn(
          "absolute border px-0 py-2 md:px-4 xs:max-w-[203px] w-[40vw] md:max-w-[290px] text-center text-typography border-typography top-1/2 -translate-y-1/2 bg-incubation font-bold whitespace-nowrap z-10",
          isActive &&
            "border-main text-white right-0 translate-x-1/2  bg-active",
          !isActive && "-translate-x-1/2",
          className
        )}
      >
        {title}
      </div>
      <div className={dotClassName} />
    </div>
  );
}
