"use client";

import { PROJECT_LIST } from "@/app/voting/consts";
import { IProject } from "@/app/voting/types";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";
import { Loading } from "@/components/Loading";

// 定义每行数据
const rows = [
  PROJECT_LIST.slice(0, 3), // 第一行 3个
  PROJECT_LIST.slice(3, 5), // 第二行 2个
  PROJECT_LIST.slice(5, 8), // 第三行 3个
  PROJECT_LIST.slice(8, 10), // 第四行 2个
];

export function Projects({
  onVoting,
  weight = 1,
}: {
  onVoting: (projectId: string) => Promise<any>;
  weight: number;
}) {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center items-center gap-6"
            style={{
              marginTop: rowIndex === 0 ? "0" : "-3rem", // 让每一行都向上偏移，创造重叠效果
            }}
          >
            {row.map((item) => (
              <ProjectItem
                onVoting={onVoting}
                key={item.id}
                item={item}
                weight={weight}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectItem({
  item,
  weight,
  onVoting,
}: {
  item: IProject;
  weight: number;
  onVoting: (projectId: string) => Promise<any>;
}) {
  const [submiting, setSubmiting] = useState(false);
  const onSubmitVote = async () => {
    setSubmiting(true);
    onVoting(item.id).finally(() => {
      setSubmiting(false);
    });
  };
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="cursor-pointer">
          <Image src={item.activeLogo} alt={item.name} />
        </div>
      </DrawerTrigger>
      <DrawerContent className="pb-6 bg-oscarBlack border-none">
        <DrawerHeader className="w-4/5 mx-auto">
          <DrawerTitle>
            <Image
              className="-mt-20 mx-auto"
              src={item.activeLogo}
              alt={item.name}
            />
          </DrawerTitle>
          <DrawerDescription>{item.intro}</DrawerDescription>
        </DrawerHeader>
        <button
          onClick={onSubmitVote}
          disabled={submiting}
          className={cn(
            styles.submit,
            "text-xl font-extrabold text-center py-2 w-4/5 mx-auto cursor-pointer"
          )}
        >
          {submiting && <Loading color="#B5964D" />}
          <span className={cn(submiting && "ml-2")}>+ {weight}</span>
        </button>
      </DrawerContent>
    </Drawer>
  );
}
