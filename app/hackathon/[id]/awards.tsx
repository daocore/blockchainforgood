"use client";

import { useParams } from "next/navigation";
import { useAPIGetEventApproveList } from "../api";
import { EventsApproveEntity } from "../types";
import { RawImage } from "@/components/Image";
import { TagEntity } from "@/app/square/types";
import { EventsRoleValue } from "@/app/square/types";
import styles from "./index.module.css";
import { cn } from "@/lib";
import { Skeleton } from "@/components/ui/skeleton";

export function Awards() {
  return (
    <div className="relative">
      <div
        className={cn(
          "w-full max-w-content mx-auto py-14 flex flex-col md:flex-row gap-6"
        )}
      >
        <Title />
        <List />
      </div>
      <div className={cn(styles.awards, "absolute inset-0 opacity-5")} />
    </div>
  );
}

function Title() {
  return (
    <div className="w-full md:w-80 text-center text-black text-5xl font-bold">
      Awards
    </div>
  );
}

function List() {
  const { id } = useParams<{ id: string }>();

  const { isLoading, data: { list } = { list: [], total: 0 } } =
    useAPIGetEventApproveList({
      events: id,
      roleType: EventsRoleValue.RESULT_ORG,
      email: 1,
    });

  if (isLoading) {
    return <SkeletonAwards />;
  }

  return (
    <div className="w-full space-y-6 md:space-y-0 px-4">
      {list.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

function Item({ item }: { item: EventsApproveEntity }) {
  const { organization, diyform } = item;
  const { tags } = organization;

  const formData = diyform ? JSON.parse(diyform) : {};

  const { name, assets, award } = formData;

  const firstAsstes = assets;
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-black pb-4 md:pb-0 border-b border-black">
      <div className="space-y-4">
        <Tags tags={tags} />
        <h3 className="text-block font-bold text-[32px] !mb-8">{name}</h3>
        <div className="flex items-center gap-4">
          <div>
            <RawImage
              src={organization.logo}
              alt={organization.name}
              className="h-4"
            />
          </div>
          <span className="w-[1px] h-3 bg-black shrink-0 grow-0"></span>
          <div className="font-semibold">
            Prize Worth
            <span className="ml-2 py-1 px-2 bg-[#00d5bf]">{award}</span>
          </div>
        </div>
      </div>
      {firstAsstes && (
        <RawImage src={firstAsstes} className="w-full md:w-[400px] h-[254px]" />
      )}
    </div>
  );
}

function Tags({ tags = [] }: { tags: TagEntity[] }) {
  return (
    <div className="flex gap-4 md:group-hover:hidden flex-wrap">
      {tags.slice(0, 3).map((tag) => (
        <span
          key={tag.id}
          className="text-xs md:text-sm border border-black py-1 px-2 md:py-2 md:px-4 text-black font-semibold whitespace-nowrap"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
}

function SkeletonAwards() {
  return (
    <div className="w-full space-y-6 px-4">
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
    </div>
  );
}
