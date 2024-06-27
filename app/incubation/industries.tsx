import SerurityAndTransparencyImage from "@/assets/incubation/security-transparency.png";
import LifeAndHealthImage from "@/assets/incubation/life-health.png";
import SustainableDevelopmentImage from "@/assets/incubation/sustainable-development.png";
import GlobalEducationDevelopmentImage from "@/assets/incubation/global-education-development.png";
import ReducingInequalityImage from "@/assets/incubation/reducing-inequality.png";
import OthersImage from "@/assets/incubation/others.png";
import Image from "next/image";

const list = [
  {
    label: "Srcurity and Transparency",
    element: SerurityAndTransparencyImage,
  },
  {
    label: "Life and Health",
    element: LifeAndHealthImage,
  },
  {
    label: "Sustainable Development",
    element: SustainableDevelopmentImage,
  },
  {
    label: "Global Education Development",
    element: GlobalEducationDevelopmentImage,
  },
  {
    label: "Reducing Inequality",
    element: ReducingInequalityImage,
  },
  {
    label: "Others",
    element: OthersImage,
  },
];

export function Industries() {
  return (
    <div className="w-full px-4 py-6 min-h-[148px] border-b border-t border-main flex items-center">
      <div className="w-full md:w-content mx-auto grid grid-cols-3 md:grid-cols-6 gap-6">
        {list.map((item) => (
          <div className="flex flex-col items-center">
            <Image src={item.element} alt={item.label} className="w-12 h-12" />
            <span className="text-white text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
