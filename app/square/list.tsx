"use client";
import Image from "next/image";
import { useAPIGetNewsInfinete } from "./api";
import { EventsApproveEntity, IGetListParams, TabItem } from "./types";
import { IMAGE_URL } from "@/constants";
import styles from "./square.module.css";
import { cn, IsProductionServer } from "@/lib";
import { SkeletonList } from "./skeleton";
import { useEffect, useRef } from "react";
import { PAGE_SIZE } from "../news/constants";
import { Empty } from "@/components/Empty";
import { LoadingMore } from "@/components/Loading";
import { DEV_TITLE_KEY, PROD_TITLE_KEY } from "./constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  // const isReachingEnd = data && data[data.length - 1]?.length < PAGE_SIZE;
  const isReachingEnd = true;

  const list = data ? [].concat(...data) : [];
  return (
    <>
      <div
        className={cn(
          "grid grid-cols-auto-fill xs:grid-cols-auto-fill-xs md:grid-cols-auto-fill-md gap-6",
          styles.container
        )}
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
  if (list.length === 0) {
    return (
      <div className="w-full col-span-full justify-center">
        <Empty />
      </div>
    );
  }
  if (type === TabItem.ADVISORS) {
    return list.map((item) => {
      const { user } = item;
      return <UserItem key={user.id} item={item} />;
    });
  }

  if (type === TabItem.PARTNERS) {
    return list.map((item) => {
      const { organization } = item;
      return <PartnersItem key={organization.id} item={item} />;
    });
  }

  if (type === TabItem.PROJECTS) {
    return list.map((item) => {
      const { organization } = item;
      return <ProjectsItem key={organization.id} item={item} />;
    });
  }
}

interface IItemProps {
  item: EventsApproveEntity;
}

const imageClassNames =
  "w-40 h-40 xs:w-[150px] xs:h-[150px] md:w-[185px] md:h-[185px] transition-transform duration-300 hover:scale-110 object-contain";

const itemClassNames = "w-40 xs:w-[150px] md:w-[185px]";

const isProduction = IsProductionServer();
const titleKey = isProduction ? PROD_TITLE_KEY : DEV_TITLE_KEY;
function UserItem({ item }: IItemProps) {
  const {
    user: { avatar, name },
    diyform,
  } = item;

  const diyFormJson = JSON.parse(diyform);

  return (
    <div className={itemClassNames}>
      <div className="bg-white overflow-hidden">
        <Image
          src={`${IMAGE_URL}${avatar}`}
          alt={name}
          className={imageClassNames}
          width={185}
          height={185}
        />
      </div>
      <h4 className="font-bold text-base text-center mt-2">{name}</h4>
      <p className="text-sm text-typography text-center">
        {diyFormJson[titleKey]}
      </p>
    </div>
  );
}

function PartnersItem({ item }: IItemProps) {
  const {
    organization: { logo, name, tags },
  } = item;
  return (
    <div className={itemClassNames}>
      <div className="bg-white overflow-hidden">
        <Image
          className={imageClassNames}
          src={`${IMAGE_URL}${logo}`}
          alt={name}
          width={185}
          height={185}
        />
      </div>
      <h4 className="font-bold text-base text-center my-2">{name}</h4>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* Used to achieve overall centre and left text */}
            <div className="flex justify-center overflow-hidden">
              <div className="inline-flex gap-2 truncate text-xs text-white">
                {tags.map((tag) => (
                  <div key={tag.id} className="bg-[#B6B6BF] px-1 py-0.5">
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex justify-center flex-wrap gap-2 text-white text-xs">
              {tags.map((tag) => (
                <div key={tag.id} className="bg-[#B6B6BF]  px-1 py-0.5">
                  {tag.name}
                </div>
              ))}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

const BGAIncubationTypeEnum = {
  0: "Moderate Incubation",
  1: "Incentive Incubation",
  2: "Light Incubation",
};

function ProjectsItem({ item }: IItemProps) {
  const {
    organization: { logo, name, type },
  } = item;
  return (
    <div className={cn("relative overflow-hidden", itemClassNames)}>
      <div className="bg-white overflow-hidden">
        <Image
          className={imageClassNames}
          src={`${IMAGE_URL}${logo}`}
          alt={name}
          width={185}
          height={185}
        />
      </div>
      <h4 className="font-bold text-base text-center my-2">{name}</h4>
      <div className={styles["corner-ribbon"]}>
        {BGAIncubationTypeEnum[type]}
      </div>
    </div>
  );
}
