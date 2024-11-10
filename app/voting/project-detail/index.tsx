import Image from "next/image";
import { IProject } from "../types";
import { ChevronLeft } from "lucide-react";

export function ProjectDetail({
  project,
  onBack,
}: {
  project: IProject;
  onBack: () => void;
}) {
  const { name, intro, logo } = project;
  return (
    <div className="h-full flex flex-col justify-center px-6 relative">
      <div className="">
        <div className="mb-4">
          <Image className="mx-auto" src={logo} alt={name} />
        </div>
        {/* <div className="text-center text-4xl font-bold text-oscarActive my-2">
          {name}
        </div> */}
        <div className="text-white text-lg">{intro}</div>
      </div>
      <div
        className="absolute bottom-6 right-6 cursor-pointer text-xl font-medium flex justify-end items-center gap-2 mt-8"
        style={{ color: "#C09845" }}
        onClick={onBack}
      >
        <ChevronLeft />
        Back to Ranking List
      </div>
    </div>
  );
}
