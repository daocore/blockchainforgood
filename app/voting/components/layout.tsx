import { cn } from "@/lib";
import styles from "../styles.module.css";
import { TopThree } from "./top-three";
import { QRCode } from "./qr-code";
import { Title } from "./title";
import { ReactNode } from "react";
import { IVoteResult } from "@/app/vote/[id]/types";
import Image from "next/image";
import { IMAGE_URL } from "@/constants";

export function Layout({
  children,
  title,
  dataSource,
  onProjectSelected,
}: {
  children: ReactNode;
  title: string;
  dataSource: IVoteResult[];
  onProjectSelected: (index: number) => void;
}) {
  return (
    <div className={cn("-mt-20 pt-20 w-full h-screen", styles.voting)}>
      <div className="w-full px-16">
        <Title>{title}</Title>

        <div className="flex gap-16 mt-10">
          <div className="space-y-8">
            <TopThree dataSource={dataSource} />
            <QRCode />
          </div>
          {children}
        </div>
        <div className="flex justify-end gap-2 mt-2">
          {dataSource.map((item, index) => (
            <Image
              key={item.id}
              width={32}
              height={32}
              className="w-8 h-auto object-contain cursor-pointer"
              src={`${IMAGE_URL}${item.project.logo}`}
              alt={item.project.name}
              onClick={() => onProjectSelected(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
