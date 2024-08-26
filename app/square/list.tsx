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

const itemClassNames = "w-40 xs:w-[150px] md:w-[185px]";

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
  return (
    <div className={itemClassNames}>
      <ImageCard src={imageSrc} alt={name} style={imageStyle} />

      <Title name={name} />

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
          <h4 className="font-bold text-base text-center mt-2 truncate">
            {name}
          </h4>
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
}: {
  alt: string;
  src: string;
  style?: CSSProperties;
}) {
  return (
    <div className="bg-white overflow-hidden">
      {/* 用了Nextjs自带的Image后，打开图片就会出问题。可能是配置不正确，暂时先用img元素代替 */}
      <img
        src={`${IMAGE_URL}${src}`}
        alt={alt}
        className="w-40 h-40 xs:w-[150px] xs:h-[150px] md:w-[185px] md:h-[185px] transition-transform duration-300 hover:scale-110 object-contain"
        width={185}
        height={185}
        style={style}
      />
    </div>
  );
}
