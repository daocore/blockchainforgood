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

export function ProjectsTrends({ dataSource }: { dataSource: IVoteResult[] }) {
  const max = dataSource[0].count;
  const restProject = dataSource
    .slice(3)
    .map((project) => ({ ...project, total: max }));
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
    <div>
      <DataTable table={table} />
    </div>
  );
}
