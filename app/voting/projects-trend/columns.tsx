"use client";

import { IVoteResult } from "@/app/vote/[id]/types";
import { IMAGE_URL } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";

export const columns: ColumnDef<IVoteResult>[] = [
  {
    accessorKey: "ranking",
    header: "RANKING",
    size: 100,
  },
  {
    id: "LOGO",
    header: "",
    size: 50,
    cell: ({ row }) => {
      const {
        original: { project },
      } = row;
      return (
        <Image
          width={24}
          height={24}
          className="rounded-full w-6 h-6 hidden md:block"
          src={`${IMAGE_URL}${project.logo}`}
          alt={project.name}
        />
      );
    },
  },
  {
    accessorKey: "project.name",
    id: "projectName",
    header: "PROJECTS",
    cell: ({ row }) => {
      const {
        original: { project, eventId, count, total },
      } = row;
      const precentValue = Math.round((count / total) * 100);

      return (
        <Link target="_blank" href={`/project/${eventId}/${project.id}`}>
          <span className="inline-block w-full font-bold whitespace-normal">
            {project.name}
          </span>
          <Progress
            childrenClassName="bg-oscarActive"
            className="h-1 bg-white/10 hidden md:block"
            value={precentValue}
          />
        </Link>
      );
    },
  },
  {
    header: "VOTES",
    size: 100,
    maxSize: 120,
    cell: ({ row }) => {
      const {
        original: { trend, count },
      } = row;
      return (
        <div className="flex items-center gap-2">
          <span className="text-oscarActive">{count}</span>
        </div>
      );
    },
  },
];
