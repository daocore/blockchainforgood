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
import { IVoteResult } from "@/app/vote/[id]/types";

interface DataTableProps {
  table: TableInstance<IVoteResult>;
}

const DEFAILT_MAX_SHOW_ROWS = 10;

export function DataTable({ table }: DataTableProps) {
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
            table.getRowModel().rows.map((row) => (
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
    </div>
  );
}
