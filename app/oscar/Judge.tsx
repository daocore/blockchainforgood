"use client";

import { useIsMobile } from "@/hooks";
import { useRouter } from "next-nprogress-bar";
import styles from "./styles.module.css";
import { cn } from "@/lib";
import { OSCAR_HACKTHON_EVENT_ID, ROUTER_PATH } from "@/constants";
import { useMemo } from "react";
import homeStyles from "../home/styles.module.css";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface IJudgeItem {
  name: string;
  title: string;
  avatar: string;
  company: string;
  links: [
    {
      type: number;
      link: string;
    },
    {
      type: number;
      link: string;
    }
  ];
}

const data: IJudgeItem[] = [];

const JudgeItem = ({ item }: { item: IJudgeItem }) => {
  return (
    <div
      className="flex flex-col items-center w-2/5 md:w-[300px] text-typography mt-8"
      style={{ filter: "blur(4px)" }}
    >
      <svg
        className="w-4/5 h-4/5 md:w-[180px] md:h-[180px]"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="90" cy="90" r="90" fill="url(#paint0_linear_2376_9582)" />
        <defs>
          <linearGradient
            id="paint0_linear_2376_9582"
            x1="63"
            y1="194.4"
            x2="180"
            y2="28.8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B5964D" stopOpacity="0.8" />
            <stop offset="0.33399" stopColor="#B5964D" stopOpacity="0.478565" />
            <stop offset="0.980296" stopColor="#B5964D" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="text-oscarActive">{item?.name}</div>
      <div>{item?.title}</div>
      <div>{item?.company}</div>
      <div className="flex justify-center items-center gap-2 mt-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="#283344" />
          <path
            d="M13.143 11.0817L17.6107 6H16.5522L12.6711 10.4115L9.5735 6H6L10.6852 12.6715L6 18H7.05857L11.1546 13.3403L14.4265 18H18L13.143 11.0817ZM11.6926 12.7301L11.2172 12.0653L7.44032 6.78088H9.06651L12.1155 11.0472L12.5889 11.7119L16.5517 17.2572H14.9255L11.6926 12.7301Z"
            fill="#B5964D"
            fillOpacity="0.75"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="#283344" />
          <path
            d="M6.40676 8.5933C6.13539 8.33452 6 8.01435 6 7.6334C6 7.25245 6.13539 6.91783 6.40676 6.65905C6.67813 6.40027 7.02745 6.27087 7.45591 6.27087C7.88436 6.27087 8.21962 6.40027 8.49041 6.65905C8.76178 6.91783 8.89717 7.24282 8.89717 7.6334C8.89717 8.02398 8.76178 8.33452 8.49041 8.5933C8.21904 8.85208 7.87439 8.98147 7.45591 8.98147C7.03742 8.98147 6.67813 8.85208 6.40676 8.5933ZM8.66858 10.0774V18.0076H6.22858V10.0774H8.66858Z"
            fill="#B5964D"
            fillOpacity="0.75"
          />
          <path
            d="M16.7933 10.8604C17.3249 11.4532 17.591 12.2674 17.591 13.3038V17.868H15.2729V13.6257C15.2729 13.1034 15.141 12.6971 14.8773 12.4077C14.6135 12.1182 14.2589 11.9737 13.8135 11.9737C13.368 11.9737 13.0134 12.1188 12.7497 12.4077C12.4859 12.6971 12.354 13.1034 12.354 13.6257V17.868H10.0225V10.0557H12.354V11.0921C12.5902 10.7466 12.9085 10.474 13.3088 10.273C13.7085 10.0726 14.1587 9.97209 14.6587 9.97209C15.5496 9.97209 16.2611 10.2688 16.7927 10.861L16.7933 10.8604Z"
            fill="#B5964D"
            fillOpacity="0.75"
          />
        </svg>
      </div>
    </div>
  );
};

export const Judge = () => {
  const mobile = useIsMobile();
  const router = useRouter();
  const list = useMemo(
    () =>
      Array(mobile ? 4 : 8).fill({
        name: "name",
        title: "title",
        avatar: "avatar",
        company: "company",
        links: [
          {
            type: 1,
            link: "links",
          },
          {
            type: 1,
            link: "links",
          },
        ],
      }),
    [data, mobile]
  );

  const ref = useIntersectionObserver<HTMLDivElement>(
    homeStyles.moveFromBottom
  );
  return (
    <div
      ref={ref}
      className={cn(
        "md:w-content w-full flex flex-wrap justify-around relative"
      )}
    >
      <div
        className="absolute w-full h-full flex justify-center items-center"
        style={{
          backdropFilter: `blur(4px)`,
        }}
      >
        <div
          className={cn(
            "inline-flex bg-transparent px-6 py-1 font-bold h-[36px] w-[90vw] md:w-60 text-center cursor-pointer",
            styles["banner-button"],
            mobile && "mt-10"
          )}
          onClick={() => {
            router.push(`${ROUTER_PATH.FORM.GUEST}/${OSCAR_HACKTHON_EVENT_ID}`);
          }}
        >
          <span className="mx-auto">Join us as a judge</span>
        </div>
      </div>
      {list?.map((item, index) => {
        return <JudgeItem item={item} key={index} />;
      })}
    </div>
  );
};
