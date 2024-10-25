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
    header: "RANK",
    size: 100,
    cell: ({ row }) => {
      const {
        original: { ranking },
      } = row;
      return (
        <span
          style={{ color: "#c5cfe0" }}
          className="w-20 font-medium text-2xl italic"
        >
          {ranking}
        </span>
      );
    },
  },
  {
    id: "LOGO",
    header: "LOGO",
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
        <div className="relative h-11">
          <Progress
            childrenClassName="bg-oscarActive"
            className="h-full bg-white/10 hidden md:block absolute inset-0 rounded-none"
            value={precentValue}
          />
          <Link
            className="absolute top-1/2 -translate-y-1/2"
            target="_blank"
            href={`/project/${eventId}/${project.id}`}
          >
            <span
              style={{ color: "#ffd989" }}
              className="inline-block w-full text-xl font-semibol italic whitespace-nowrap indent-2"
            >
              {project.name}
            </span>
          </Link>
        </div>
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
        <span className="text-oscarActive font-bold text-2xl italic">
          {count}
        </span>
      );
    },
  },
];
