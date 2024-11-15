"use client";

import { IVoteResult } from "@/app/vote/[id]/types";
import { IMAGE_URL } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export const columns: ColumnDef<IVoteResult>[] = [
  {
    id: "ranking",
    accessorKey: "ranking",
    header: "RANKING",
    size: 100,
  },
  {
    id: "avator",
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
    header: () => {
      return <span>NUMBER OF VOTES</span>;
    },
    cell: ({ row }) => {
      const {
        original: { project, eventId, count, total },
      } = row;
      const precentValue = Math.round((count / total) * 100);

      return (
        <div className="relative h-11 hidden md:block">
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
    accessorKey: "project.name",
    id: "projectName2",
    header: () => {
      return <span>PROJECT</span>;
    },
    cell: ({ row }) => {
      const {
        original: { project, eventId },
      } = row;

      return (
        <Link target="_blank" href={`/project/${eventId}/${project.id}`}>
          <span
            style={{ color: "#ffd989" }}
            className="inline-block w-full text-xl font-semibol italic"
          >
            {project.name}
          </span>
        </Link>
      );
    },
  },
  {
    id: "votes",
    accessorKey: "project",
    header: () => {
      return <span className="block md:hidden">VOTES</span>;
    },
    size: 100,
    maxSize: 120,
    cell: ({ row }) => {
      const {
        original: { count },
      } = row;
      return (
        <div className="flex items-center gap-2">
          <span className="text-oscarActive">{count}</span>
        </div>
      );
    },
  },
];
