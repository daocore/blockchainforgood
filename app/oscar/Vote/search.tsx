import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { Table } from "@tanstack/react-table";
import { IVoteResult } from "@/app/vote/[id]/types";

interface IProps {
  table: Table<IVoteResult>;
}

export function Search({ table }: IProps) {
  return (
    <div
      style={{
        background: "rgba(249, 250, 251, 0.06)",
      }}
      className="flex items-center pl-3 text-description w-80"
    >
      <SearchIcon className="w-4 h-4" />
      <Input
        placeholder="Search Project Here"
        className="h-full border-none bg-transparent text-base outline-none! focus-visible:ring-0 focus-visible:ring-offset-0"
        value={
          (table.getColumn("projectName")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("projectName")?.setFilterValue(event.target.value)
        }
      />
    </div>
  );
}
