import { cn } from "@/lib";
import Image, { StaticImageData } from "next/image";
import styles from "../styles.module.css";
import FirstImage from "@/assets/vote/first.png";
import SecondImage from "@/assets/vote/second.png";
import ThirdImage from "@/assets/vote/third.png";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { IVotingResult } from "@/app/vote/[id]/[code]/types";

export function TopThree({ dataSource }: { dataSource: IVotingResult[] }) {
  const first = dataSource[0];
  const second = dataSource[1];
  const third = dataSource[2];
  const isShow = first && second && third;

  const isZero = first.count === 0;
  return (
    <div
      style={{ height: "calc(100% - 137px - 32px)" }}
      className="flex justify-between gap-8"
    >
      {isShow && (
        <>
          <TopItem
            project={second}
            height={isZero ? 0 : second.count / first.count}
            image={SecondImage}
          />
          <TopItem project={first} height={isZero ? 0 : 1} image={FirstImage} />
          <TopItem
            project={third}
            height={isZero ? 0 : third.count / first.count}
            image={ThirdImage}
          />
        </>
      )}
    </div>
  );
}

function TopItem({
  project,
  height,
  image,
}: {
  project: IVotingResult;
  height: number;
  image: StaticImageData;
}) {
  const { name, activeLogo } = project.project;
  const { count } = project;
  return (
    <div className="flex gap-2 flex-col justify-end text-white ">
      <div className={cn("w-32")}>
        <Image
          width={1}
          height={1}
          className="w-32"
          src={activeLogo}
          alt={name}
        />
      </div>
      <div
        style={{
          height: `calc(${height} * (100% - 10rem))`,
          minHeight: "176px",
        }}
        className={cn(
          styles["top-item-bar"],
          "w-full h-full flex flex-col justify-around"
        )}
      >
        <div className="space-y-2 h-full">
          <Image className="mx-auto pt-6" src={image} alt={"top"} />
          <p className="text-5xl font-bold text-center">
            <AnimatedCounter value={count} />
          </p>
          <p className="text-xl text-center">Votes</p>
        </div>
      </div>
    </div>
  );
}
