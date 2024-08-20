"use client";

import { IMAGE_URL } from "@/constants";
import { useAPIGetList } from "../api";
import { EventsEntity } from "../types";
import Image from "next/image";
import LocationImage from "@/assets/location.png";
import { SkeletonList } from "./skeleton";

export function List() {
  const {
    data: { list } = {
      total: 0,
      list: [],
    },
    error,
    isLoading,
  } = useAPIGetList();
  if (isLoading) {
    return <SkeletonList />;
  }
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {list && list.length > 0 && (
        <div className="space-y-4">
          {list.map((item) => (
            <HackathonItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function HackathonItem({ item }: { item: EventsEntity }) {
  const { location, assets } = item;

  const locationObj = location ? JSON.parse(location) : {};
  const assetsList: string[] = (assets ? JSON.parse(assets) : [])?.slice(0, 2);

  return (
    <div>
      <p className="flex items-center text-main gap-1 font-semibold truncate">
        <Image
          alt="location w-8 h-8"
          width={32}
          height={32}
          src={LocationImage}
        />
        {locationObj.area}
      </p>
      <h3 className="text-3xl font-bold">{item.name}</h3>
      <div className="grid grid-cols-3 gap-2 grid-row-2 md:grid-row-3">
        <img
          src={`${IMAGE_URL}${item.cover}`}
          alt={item.name}
          className="row-span-2 col-span-3 md:col-span-2 h-full object-cover"
        />
        {assetsList.map((asset, index) => (
          <img
            key={asset}
            src={`${IMAGE_URL}${asset}`}
            alt={asset}
            className={
              index === 0
                ? "col-span-2 md:col-span-1 h-full object-cover"
                : "col-span-1 h-full object-cover"
            }
          />
        ))}
      </div>
    </div>
  );
}
