import { IVoteResult } from "@/app/vote/[id]/types";

export function ProjectDetail({ item }: { item: IVoteResult }) {
  const { project } = item;
  return (
    <div className="h-full flex items-center">
      <div className="">
        <div className="text-center text-4xl font-bold text-oscarActive my-2">
          {project.name}
        </div>
        <div className="text-white text-lg">{project.intro}</div>
      </div>
    </div>
  );
}
