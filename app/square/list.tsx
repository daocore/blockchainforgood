"use client";
import Image from "next/image";
import { useAPIGetNewsInfinete } from "./api";
import { EventsApproveEntity, IGetListParams, TabItem } from "./types";
import { IMAGE_URL } from "@/constants";
import styles from "./square.module.css";
import { cn } from "@/lib";
import { SkeletonList } from "./skeleton";
import { useEffect, useRef } from "react";
import { PAGE_SIZE } from "../news/constants";
import { LoadingMore } from "@/components";

type IProps = Omit<IGetListParams, "current" | "pageSize"> & {
  type: TabItem.ADVISORS | TabItem.PARTNERS | TabItem.PROJECTS;
};

export function List({ type, ...props }: IProps) {
  const {
    data = [],
    isLoading,
    size,
    setSize,
  } = useAPIGetNewsInfinete({
    current: 1,
    pageSize: PAGE_SIZE,
    ...props,
  });

  const loader = useRef(null);
  useEffect(() => {
    if (isLoading || !loader.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSize((prev) => prev + 1);
      }
    });
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [isLoading]);

  const isLoadingMore =
    size > 1 && data && typeof data[size - 1] === "undefined";
  // no more data
  const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE;

  const list = data ? [].concat(...data) : [];

  return (
    <>
      <div
        className={cn("flex justify-center flex-wrap gap-6", styles.container)}
      >
        {isLoading ? <SkeletonList /> : <ListImpl type={type} list={list} />}
      </div>

      {isLoadingMore && !isReachingEnd && <LoadingMore />}
      <div ref={loader} />
    </>
  );
}

function ListImpl({
  type,
  list,
}: {
  type: IProps["type"];
  list: EventsApproveEntity[];
}) {
  return (
    <>
      {list.map((item) => {
        if (type === TabItem.ADVISORS) {
          const { user } = item;
          return <UserItem key={user.id} item={item} />;
        }

        if (type === TabItem.PARTNERS) {
          const { organization } = item;
          return <PartnersItem key={organization.id} item={item} />;
        }

        if (type === TabItem.PROJECTS) {
          const { organization } = item;
          return <ProjectsItem key={organization.id} item={item} />;
        }
      })}
    </>
  );
}

interface IItemProps {
  item: EventsApproveEntity;
}

function UserItem({ item }: IItemProps) {
  const {
    user: { avatar, name },
  } = item;
  return (
    <div className="w-40 xs:w-[150px] md:w-[185px]">
      <Image
        src={`${IMAGE_URL}${avatar}`}
        alt={name}
        className="w-40 h-40 xs:w-[150px] xs:h-[150px] md:w-[185px] md:h-[185px] transition-transform duration-300 hover:scale-110"
        width={185}
        height={185}
      />
      <h4 className="font-bold text-base text-center mt-2">{name}</h4>
      <p className="text-sm text-typography text-center">Title</p>
    </div>
  );
}

function PartnersItem({ item }: IItemProps) {
  const {
    organization: { logo, name, tags },
  } = item;
  return (
    <div className="w-40 xs:w-[150px] md:w-[185px]">
      <Image
        className="w-40 h-40 xs:w-[150px] xs:h-[150px] md:w-[185px] md:h-[185px] transition-transform duration-300 hover:scale-110"
        src={`${IMAGE_URL}${logo}`}
        alt={name}
        width={185}
        height={185}
      />
      <h4 className="font-bold text-base text-center my-2">{name}</h4>
      <div className={cn("flex justify-center flex-wrap gap-2")}>
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="bg-[#B6B6BF] text-white text-xs px-1 py-0.5"
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsItem({ item }: IItemProps) {
  const {
    organization: { logo, name },
  } = item;
  return (
    <div className="relative overflow-hidden w-40 xs:w-[150px] md:w-[185px]">
      <Image
        className="w-40 h-40 xs:w-[150px] xs:h-[150px] md:w-[185px] md:h-[185px] transition-transform duration-300 hover:scale-110"
        src={`${IMAGE_URL}${logo}`}
        alt={name}
        width={185}
        height={185}
      />
      <h4 className="font-bold text-base text-center my-2">{name}</h4>
      <div className={styles["corner-ribbon"]}>Moderate Incubation</div>
    </div>
  );
}
