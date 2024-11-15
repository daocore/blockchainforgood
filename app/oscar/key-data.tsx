import { cn } from "@/lib";
import styles from "./styles.module.css";

const keyDatas = [
  {
    label: "Prize",
    value: "100k",
  },
  {
    label: "Votes",
    value: "42k+",
  },
  {
    label: "Submissions",
    value: "270+",
  },
  {
    label: "Awards",
    value: "15",
  },
  {
    label: "Judges",
    value: "50+",
  },
  {
    label: "Shortlist",
    value: "10",
  },
];

export function KeyData() {
  return (
    <div className="bg-oscarBlack px-2 md:px-0 pt-10">
      <div className="w-full md:w-content mx-auto  grid grid-cols-3 gap-6  md:grid-cols-6 md:gap-28">
        {keyDatas.map((item) => (
          <KeyDataItem item={item} key={item.label} />
        ))}
      </div>
    </div>
  );
}

function KeyDataItem({ item }: { item: (typeof keyDatas)[number] }) {
  const { label, value } = item;
  return (
    <div>
      <p
        className={cn(
          "text-3xl md:text-5xl font-medium",
          styles["gradiend-text"]
        )}
      >
        {value}
      </p>
      <p className="text-description text-sm md:text-base">{label}</p>
    </div>
  );
}
