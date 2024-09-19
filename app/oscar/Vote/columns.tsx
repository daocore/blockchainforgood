"use client";

import { IVoteResult } from "@/app/vote/[id]/types";
import { Button } from "@/components/ui";
import { IMAGE_URL } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowDown, ArrowUp } from "lucide-react";

export const columns: ColumnDef<IVoteResult>[] = [
  {
    accessorKey: "ranking",
    header: "RANKING",
  },
  {
    accessorKey: "project",
    header: "NAME",
    cell: ({ row }) => {
      const {
        original: { project },
      } = row;
      return (
        <div className="flex gap-2">
          <Image
            width={24}
            height={24}
            className="rounded-full w-6 h-6"
            src={`${IMAGE_URL}${project.logo}`}
            alt={project.name}
          />
          <span className="font-bold">{project.name}</span>
        </div>
      );
    },
  },
  {
    header: "NUMBER OF VOTES",
    cell: ({ row }) => {
      const {
        original: { count, total },
      } = row;
      const precentValue = Math.round((count / total) * 100);
      return (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Progress
                childrenClassName="bg-oscarActive"
                className="h-1 bg-white/10"
                value={precentValue}
              />
            </TooltipTrigger>
            <TooltipContent>{count}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    header: "TRENDS",
    cell: ({ row }) => {
      const {
        original: { trend },
      } = row;
      if (trend > 0) {
        return (
          <div className="text-oscarActive flex items-center gap-2">
            <ArrowUp className="w-4 h-4" />
            <span>{trend}</span>
          </div>
        );
      }
      if (trend < 0) {
        return (
          <div className="flex items-center gap-2">
            <ArrowDown className="text-description w-4 h-4" />
            <span className="text-oscarActive">{Math.abs(trend)}</span>
          </div>
        );
      }
      if (trend === 0) {
        return <span className="text-description">--</span>;
      }
    },
  },
  // {
  //   id: "action",
  //   header: "ACTION",
  //   cell: ({ row }) => (
  //     <Button
  //       style={{
  //         background: "linear-gradient(254.42deg, #FFCA5C 0%, #C09845 83.9%)",
  //         color: "#101927",
  //       }}
  //       className="px-6 rounded-full leading-7 h-7"
  //       size="sm"
  //     >
  //       Vote
  //     </Button>
  //   ),
  // },
];
