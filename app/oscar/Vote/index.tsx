import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useAPIGetVoteResult } from "@/app/vote/[id]/api";
import { Loading } from "./skelete-loading";

export function Vote() {
  const { data, isLoading } = useAPIGetVoteResult({ id: "2" });
  return (
    <div className="w-full md:w-content mx-auto p-8 border border-white/70">
      <div className="px-4">
        <h3 className="text-[28px] leading-[42px] font-bold text-white">
          Top 10 projects
        </h3>
      </div>
      {isLoading && !data && <Loading />}
      {data && <DataTable columns={columns} data={data} />}
    </div>
  );
}
