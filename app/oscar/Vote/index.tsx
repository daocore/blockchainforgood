import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useAPIGetVoteResult, useAPIVoteDetail } from "@/app/vote/[id]/api";
import { Loading } from "./skelete-loading";
import { Search } from "./search";
import { CountDown } from "./count-down";
import {
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { OSCAR_VOTE_ID } from "@/constants";

const ID = OSCAR_VOTE_ID;

export function Vote() {
  const { data, isLoading } = useAPIGetVoteResult({ id: ID });

  const { data: vote, isLoading: isVoteLoading } = useAPIVoteDetail(ID);

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: data,
    columns,
    state: {
      columnFilters,
    },
    enableRowSelection: true,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });
  return (
    <div className="w-full md:w-content mx-auto p-4 md:p-8 box-border border border-white/70">
      <div className="px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-[28px] leading-[42px] font-bold text-white">
          Top 10 projects
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
          {vote && <CountDown endTime={+vote.etimestampms} />}
          <Search table={table} />
        </div>
      </div>
      {isLoading && !data && <Loading />}
      {data && <DataTable id={ID} table={table} />}
    </div>
  );
}
