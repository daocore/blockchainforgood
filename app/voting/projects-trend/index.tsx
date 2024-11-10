"use client";

import { IVoteResult } from "@/app/vote/[id]/types";
import { DataTable } from "./data-table";
import {
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { columns } from "./columns";
import { IVotingResult } from "@/app/vote/[id]/[code]/types";

export function ProjectsTrends({
  dataSource,
}: {
  dataSource: IVotingResult[];
}) {
  const restProject = dataSource.slice(3);
  const table = useReactTable({
    data: restProject,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true, //turn off client-side pagination
    rowCount: restProject?.length,
  });
  return (
    <div className="h-full">
      <DataTable table={table} />
    </div>
  );
}
