"use client";

import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useAPIGetVoteResult, useAPIVoteDetail } from "@/app/vote/[id]/api";
import { Loading } from "./skelete-loading";
import { Search } from "./search";
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
import { useEffect, useState } from "react";
import { OSCAR_VOTE_ID } from "@/constants";
import { IVote, IVoteResult } from "@/app/vote/[id]/types";
import ICONImage from "@/assets/vote/result/Icon1.png";
import Image from "next/image";
import { useIsMobile } from "@/hooks";

const ID = OSCAR_VOTE_ID;

export function Vote() {
  const { data, isLoading } = useAPIGetVoteResult({ id: ID });

  const { data: vote } = useAPIVoteDetail(ID);

  const tableData = initialTableData(
    data,
    vote?.organizations,
    vote?.event?.id
  );

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const [columnVisibility, setColumnVisibility] = useState({
    avator: true,
    projectName: true,
    projectName2: false,
  });

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setColumnVisibility({
        avator: false,
        projectName: false,
        projectName2: true,
      });
    } else {
      setColumnVisibility({
        avator: true,
        projectName: true,
        projectName2: false,
      });
    }
  }, [isMobile]);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      columnFilters,
      columnVisibility,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true, //turn off client-side pagination
    rowCount: tableData?.length,
  });

  return (
    <div
      id="projects"
      className="hash-section w-full md:w-content mx-auto box-border"
    >
      <div className="flex items-center gap-4">
        <Image src={ICONImage} alt="top 10 projects" className="w-9 h-9" />
        <h3 className="text-3xl leading-[42px] font-bold text-oscarActive">
          TOP10 Projects
        </h3>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4">
          <Search table={table} />
        </div> */}
      {isLoading && !data && <Loading />}
      {data && <DataTable id={ID} table={table} />}
    </div>
  );
}

function initialTableData(
  data: IVoteResult[] = [],
  orgs: IVote["organizations"] = [],
  eventId: string
): IVoteResult[] {
  const newRes = [...data.map((item) => ({ ...item, eventId }))];

  if (data?.length === orgs?.length) {
    return newRes;
  }
  const existedProjectIds = data.map((project) => project.id);
  const notExistedProject = orgs.filter(
    (org) => !existedProjectIds.includes(org.id)
  );
  newRes.push(
    ...notExistedProject.map((org) => {
      return {
        id: org.id,
        total: 0,
        ranking: "-" as unknown as number,
        trend: 0,
        count: 0,
        project: org,
        eventId,
      };
    })
  );
  return newRes;
}
