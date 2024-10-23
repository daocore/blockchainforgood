"use client";

import { flexRender, Table as TableInstance } from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib";
import { Button } from "@/components/ui";
import Link from "next/link";
import { IVoteResult } from "@/app/vote/[id]/types";
import { ChevronsDown } from "lucide-react";
import { useState } from "react";

interface DataTableProps {
  table: TableInstance<IVoteResult>;
  id: string;
}

const DEFAILT_MAX_SHOW_ROWS = 10;

export function DataTable({ table, id }: DataTableProps) {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="border-none hover:bg-transparent"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead
                    style={{ width: `${header.getSize()}px` }}
                    className={cn(
                      "text-description",
                      index === 0 && "text-center"
                    )}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table
              .getRowModel()
              .rows.slice(0, showAll ? undefined : DEFAILT_MAX_SHOW_ROWS)
              .map((row) => (
                <TableRow
                  className="border-none"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    return (
                      <TableCell
                        style={{ width: `${cell.column.getSize()}px` }}
                        className={cn(
                          "text-white py-1",
                          index === 0 && "text-center"
                        )}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
          ) : (
            <TableRow className="hover:bg-transparent">
              <TableCell
                // colSpan={table.getHeaderGroups().length}
                colSpan={5}
                className="h-24 text-center text-description"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {table.getRowModel().rows?.length > DEFAILT_MAX_SHOW_ROWS && (
        <div>
          <ChevronsDown
            className={cn(
              "mx-auto text-white cursor-pointer",
              showAll && "transform rotate-180"
            )}
            onClick={() => setShowAll((val) => !val)}
          />
        </div>
      )}

      <Link href={`/vote/${id}`}>
        <Button
          style={{
            background: "linear-gradient(254.42deg, #FFCA5C 0%, #C09845 83.9%)",
            color: "#101927",
          }}
          className="px-6 rounded-full leading-7 h-7 mx-auto w-full mt-10"
          size="sm"
        >
          Vote
        </Button>
      </Link>
    </div>
  );
}
