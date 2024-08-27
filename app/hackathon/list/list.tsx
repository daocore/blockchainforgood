"use client";

import { IMAGE_URL } from "@/constants";
import { useAPIGetList } from "../api";
import { EventsEntity } from "../types";
import Image from "next/image";
import LocationImage from "@/assets/location.png";
import { SkeletonList } from "./skeleton";
import { cn } from "@/lib";

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
        <div className="space-y-6 divide-y divide-gray-300">
          {list.map((item, index) => (
            <HackathonItem
              key={item.id}
              item={item}
              className={index > 0 ? "pt-6" : ""}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function HackathonItem({
  item,
  className,
}: {
  item: EventsEntity;
  className?: string;
}) {
  const { location, assets } = item;

  const locationObj = location ? JSON.parse(location) : {};
  const assetsList: string[] = (assets ? JSON.parse(assets) : [])?.slice(0, 2);

  return (
    <div className={className}>
      <p className="flex text-base items-center text-main gap-1 font-semibold truncate">
        <Image
          alt="location w-8 h-8"
          width={32}
          height={32}
          src={LocationImage}
        />
        {locationObj.area}
      </p>
      <h3 className="text-leading font-bold">{item.name}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 grid-row-2 md:grid-row-3">
        <img
          src={`${IMAGE_URL}${item.cover}`}
          alt={item.name}
          className="row-span-2 col-span-2 h-full aspect-video object-cover"
        />
        {assetsList.map((asset, index) => (
          <img
            key={asset}
            src={`${IMAGE_URL}${asset}`}
            alt={asset}
            className={cn("h-full aspect-video object-cover col-span-1")}
          />
        ))}
      </div>
    </div>
  );
}
