import P1Image from "@/assets/joint-fund/p1.png";
import P2Image from "@/assets/joint-fund/p2.png";
import P3Image from "@/assets/joint-fund/p3.png";
import P4Image from "@/assets/joint-fund/p4.png";
import { StaticImageData } from "next/image";

export interface IItem {
  status: 0 | 1 | 2;
  name: string;
  id: string;
  parents: StaticImageData[];
}

export const list: IItem[] = [
  {
    status: 0,
    name: "BGA <> Masverse1",
    id: "1",
    parents: [P1Image, P2Image, P3Image, P4Image],
  },
  {
    status: 0,
    name: "BGA <> Masverse2",
    id: "3",
    parents: [
      P1Image,
      P2Image,
      P3Image,
      P4Image,
      P1Image,
      P2Image,
      P3Image,
      P4Image,
    ],
  },
];

export const STATUS = ["Soon", "Registration", "Closed"];

export const getItemById = (id: string) => {
  return list.find((item) => item.id === id);
};
