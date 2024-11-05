import { StaticImageData } from "next/image";

export type IExtraProjectInfo = {
  logo: StaticImageData;
  activeLogo: StaticImageData;
  intro: string;
};

export type IProject = IExtraProjectInfo & {
  id: string;
  name: string;
};
