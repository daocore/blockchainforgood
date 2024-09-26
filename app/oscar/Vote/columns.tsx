"use client";

import { IVoteResult } from "@/app/vote/[id]/types";
import { IMAGE_URL } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ReactNode } from "react";

export const columns: ColumnDef<IVoteResult>[] = [
  {
    accessorKey: "ranking",
    header: "RANKING",
  },
  {
    id: "avator",
    header: "",
    cell: ({ row }) => {
      const {
        original: { project },
      } = row;
      return (
        <Image
          width={24}
          height={24}
          className="rounded-full w-6 h-6"
          src={`${IMAGE_URL}${project.logo}`}
          alt={project.name}
        />
      );
    },
  },
  {
    accessorKey: "project.name",
    id: "projectName",
    header: "NAME",
    cell: ({ row }) => {
      const {
        original: { project },
      } = row;
      return (
        <span className="inlin-block font-bold whitespace-normal">
          {project.name}
        </span>
      );
    },
  },
  {
    // header: "NUMBER OF VOTES",
    id: "process",
    header: () => {
      return <span className="hidden md:block">NUMBER OF VOTES</span>;
    },
    cell: ({ row }) => {
      const {
        original: { count, total },
      } = row;
      const precentValue = Math.round((count / total) * 100);
      return (
        <Progress
          childrenClassName="bg-oscarActive"
          className="h-1 bg-white/10 hidden md:block"
          value={precentValue}
        />
      );
    },
  },
  {
    header: "TRENDS",
    cell: ({ row }) => {
      const {
        original: { trend, count },
      } = row;
      let icon: ReactNode = <span className="text-description">--</span>;
      if (trend > 0) {
        icon = <ArrowUp className="text-oscarActive w-4 h-4" />;
      } else if (trend < 0) {
        icon = <ArrowDown className="text-description w-4 h-4" />;
      }
      return (
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-oscarActive">{count}</span>
        </div>
      );
    },
  },
];
