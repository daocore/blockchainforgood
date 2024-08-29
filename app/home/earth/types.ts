import { CSSProperties } from "react";

export enum BGAEarthEnum {
  PARTNER = 1,
  INCUBATION = 2,
  ADVISOR = 3,
  EVENT = 4,
}

export interface IEvent {
  diyimage?: {
    style: CSSProperties,
    url: string
  }
  id: number;
  name: string;
  image: string;
  updateDate: string;
  location: {
    country: number,
    latlng: [number, number]
  };
  link: string;
  type: BGAEarthEnum.PARTNER | BGAEarthEnum.INCUBATION | BGAEarthEnum.ADVISOR | BGAEarthEnum.EVENT;
}