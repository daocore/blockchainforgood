import { PROJECT_LIST } from "@/app/voting/consts";
import { IProject } from "@/app/voting/types";
import Image from "next/image";

// 定义每行数据
const rows = [
  PROJECT_LIST.slice(0, 3), // 第一行 3个
  PROJECT_LIST.slice(3, 5), // 第二行 2个
  PROJECT_LIST.slice(5, 8), // 第三行 3个
  PROJECT_LIST.slice(8, 10), // 第四行 2个
];

export function Projects() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center items-center gap-6"
          style={{
            marginTop: rowIndex === 0 ? "0" : "-2rem", // 让每一行都向上偏移，创造重叠效果
          }}
        >
          {row.map((item) => (
            <ProjectItem key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className="cursor-pointer">
      <Image src={item.activeLogo} alt={item.name} />
    </div>
  );
}
