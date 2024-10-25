import { IVoteResult } from "@/app/vote/[id]/types";
import { IMAGE_URL } from "@/constants";
import { cn } from "@/lib";
import Image, { StaticImageData } from "next/image";
import styles from "../styles.module.css";
import FirstImage from "@/assets/vote/first.png";
import SecondImage from "@/assets/vote/second.png";
import ThirdImage from "@/assets/vote/third.png";

export function TopThree({ dataSource }: { dataSource: IVoteResult[] }) {
  const first = dataSource[0];
  const second = dataSource[1];
  const third = dataSource[2];
  return (
    <div className="flex gap-8">
      <TopItem
        project={second}
        height={second.count / first.count}
        image={SecondImage}
      />
      <TopItem project={first} height={1} image={FirstImage} />
      <TopItem
        project={third}
        height={third.count / first.count}
        image={ThirdImage}
      />
    </div>
  );
}

function TopItem({
  project,
  height,
  image,
}: {
  project: IVoteResult;
  height: number;
  image: StaticImageData;
}) {
  const { name, logo } = project.project;
  const { count } = project;
  return (
    <div className="flex gap-2 flex-col justify-end text-white ">
      <div className={cn("w-32 h-32 rounded-full", styles["top-item-image"])}>
        <div
          className={cn(
            styles["top-item-image-inner"],
            "w-full h-full rounded-full overflow-hidden flex justify-center items-center"
          )}
        >
          <Image
            width={1}
            height={1}
            className="w-auto"
            src={`${IMAGE_URL}${logo}`}
            alt={name}
          />
        </div>
      </div>
      <div
        className={cn(
          "text-center font-bold px-2 py-1",
          styles["top-item-name"]
        )}
      >
        {name}
      </div>
      <div
        style={{ height: `${height * 40}vh` }}
        className={cn(
          styles["top-item-bar"],
          "w-full flex flex-col justify-around"
        )}
      >
        <Image className="mx-auto" src={image} alt={"top"} />
        <div className="text-center">
          <p className="text-5xl font-bold">{count}</p>
          <p className="text-xl">Votes</p>
        </div>
      </div>
    </div>
  );
}
