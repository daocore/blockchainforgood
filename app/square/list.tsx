"use client";
import { useAPIGetNewsInfinete } from "./api";
import { EventsApproveEntity, IGetListParams, TabItem } from "./types";
import { ADVISOR_TITLE_ITEMKEY, IMAGE_URL } from "@/constants";
import styles from "./square.module.css";
import { cn } from "@/lib";
import { SkeletonList } from "./skeleton";
import { CSSProperties, useEffect, useRef } from "react";
import { PAGE_SIZE } from "../news/constants";
import { Empty } from "@/components/Empty";
import { LoadingMore } from "@/components/Loading";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useGetLink } from "@/hooks";

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
      <div className={cn("grid gap-6", styles.container)}>
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

const itemClassNames = "cursor-pointer";

function UserItem({ item }: IItemProps) {
  const {
    user: { avatar, name },
    diyimage,
    diyform,
  } = item;

  const diyFormJson = JSON.parse(diyform);

  let imageSrc = avatar;
  let imageStyle = {};
  if (diyimage) {
    const image = JSON.parse(diyimage);
    imageSrc = image.url;
    imageStyle = image.style;
  }

  return (
    <div className={itemClassNames}>
      <ImageCard src={imageSrc} alt={name} style={imageStyle} />

      <Title name={name} />

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <p className="text-sm text-typography text-center truncate">
              {diyFormJson[ADVISOR_TITLE_ITEMKEY]}
            </p>
          </TooltipTrigger>
          <TooltipContent>{diyFormJson[ADVISOR_TITLE_ITEMKEY]}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function PartnersItem({ item }: IItemProps) {
  const {
    organization: { logo, name, tags },
    diyimage,
  } = item;

  let imageSrc = logo;
  let imageStyle = {};
  if (diyimage) {
    const image = JSON.parse(diyimage);
    imageSrc = image.url;
    imageStyle = image.style;
  }

  const link = useGetLink(item?.organization?.links);

  return (
    <div
      className={cn(itemClassNames, "flex gap-2")}
      onClick={() => {
        if (link) {
          window.open(
            link?.includes("http") ? link : `https://${link}`,
            "_blank"
          );
        }
      }}
    >
      <ImageCard
        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] flex-none hover:shadow-lg"
        src={imageSrc}
        alt={name}
        style={imageStyle}
      />
      <div className="w-[100px] h-[100px] md:w-[125px] md:h-[150px] flex-none flex flex-col justify-between items-start overflow-hidden">
        <Title name={name} />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {/* Used to achieve overall centre and left text */}
              <div className="flex max-h-14 w-full">
                <div className="inline-flex gap-2 flex-wrap text-xs text-white w-full">
                  {tags.map((tag) => (
                    <div
                      key={tag.id}
                      className="bg-[#B6B6BF] max-w-full px-1 py-0.5 truncate overflow-hidden"
                    >
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
    diyimage,
  } = item;

  let imageSrc = logo;
  let imageStyle = {};
  if (diyimage) {
    const image = JSON.parse(diyimage);
    imageSrc = image.url;
    imageStyle = image.style;
  }

  return (
    <div className={cn("relative overflow-hidden", itemClassNames)}>
      <ImageCard src={imageSrc} alt={name} style={imageStyle} />
      <Title name={name} />

      <div className={styles["corner-ribbon"]}>
        {BGAIncubationTypeEnum[type]}
      </div>
    </div>
  );
}

function Title({ name }: { name: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <h4 className="font-bold text-base line-clamp-2">{name}</h4>
        </TooltipTrigger>
        <TooltipContent>{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function ImageCard({
  alt,
  src,
  style,
  className,
}: {
  alt: string;
  src: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{ backgroundColor: style?.backgroundColor || "#ffffff" }}
    >
      {/* 用了Nextjs自带的Image后，打开图片就会出问题。可能是配置不正确，暂时先用img元素代替 */}
      <img
        src={`${IMAGE_URL}${src}`}
        alt={alt}
        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] transition-transform duration-300 hover:scale-110 object-contain"
        width={150}
        height={150}
        style={style}
      />
    </div>
  );
}
