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

interface DataTableProps {
  table: TableInstance<IVoteResult>;
  id: string;
}

export function DataTable({ table, id }: DataTableProps) {
  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="border-none hover:bg-transparent"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className={cn("text-description")} key={header.id}>
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
              .rows.slice(0, 10)
              .map((row) => (
                <TableRow
                  className="border-none"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className={cn("text-white py-1")} key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={table.getHeaderGroups().length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
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
