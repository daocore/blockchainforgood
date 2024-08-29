"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BGAIconGreen from "@/assets/BGA Icon Green.png";
import Image from "next/image";
import CountUp from "react-countup";
import { useAPIGetList } from "./api";
import { IMAGE_URL } from "@/constants";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks";

function VideoCard() {
  return (
    <Card className="row-span-2 md:row-span-1 hover:shadow-md rounded-none">
      <CardContent>Video</CardContent>
    </Card>
  );
}

const BG_LINEAR_GRADIENT =
  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)";

const KeyDataList = [
  {
    label: "BGA Hackathon",
    value: 40,
  },
  {
    label: "BGA Tracks",
    value: 12,
  },
  { label: "BGA Hackathon projects", value: 70 },
];
function KeyData() {
  const isMobile = useIsMobile();
  return (
    <>
      {KeyDataList.map((item) => (
        <Card
          style={{
            background: isMobile ? "white" : BG_LINEAR_GRADIENT,
          }}
          key={item.label}
          className="flex flex-col justify-end hover:shadow-md rounded-none"
        >
          <CardContent className="pt-6">
            <CardTitle className="text-5xl font-black">
              <CountUp start={1} end={item.value} /> +
            </CardTitle>
            <p className="text-xl font-semibold"> {item.label}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

function Collaborate() {
  return (
    <Card
      className="row-span-2 text-white hidden md:block rounded-none hover:shadow-md"
      style={{
        background:
          "linear-gradient(52.16deg, #02CCB7 19.41%, #47E6D6 74.15%, #8DF7EC 97.6%)",
      }}
    >
      <CardContent className="h-full pt-6">
        <div className="text-[40px] leading-[44px] flex flex-col justify-between font-extrabold h-full">
          <div>
            <p>Collaborate</p>
            <p>with</p>
            <p>BGA</p>
          </div>
          <Image
            className="flex-shrink-0 flex-grow-0 w-24 h-24"
            src={BGAIconGreen}
            alt="BGA Icon Green"
            width={107}
            height={107}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function Nations() {
  const isMobile = useIsMobile();

  return (
    <Card
      style={{
        background: isMobile ? "white" : BG_LINEAR_GRADIENT,
      }}
      className="md:row-span-2 flex flex-col justify-end hover:shadow-md rounded-none"
    >
      <CardContent className="pt-6">
        <CardTitle className="text-5xl font-black">
          <CountUp start={1} end={4} />
        </CardTitle>
        <p className="text-2xl font-semibold">Illuminated Nations</p>
      </CardContent>
    </Card>
  );
}

function LatestHackathon() {
  const {
    data: { list } = {
      total: 0,
      list: [],
    },
    error,
    isLoading,
  } = useAPIGetList();
  if (isLoading || list.length === 0) {
    return <Skeleton className="xs:col-span-2 row-span-2" />;
  }
  const latestHackathon = list[0];
  return (
    <Card className="xs:col-span-2 row-span-2 rounded-none hover:shadow-md">
      <img
        src={`${IMAGE_URL}${latestHackathon.cover}`}
        alt={latestHackathon.name}
        className="h-full aspect-video object-cover"
      />
    </Card>
  );
}

export function Focus() {
  return (
    <div className="w-full md:w-content mx-auto space-y-6 pb-20">
      <h1 className="text-3xl font-bold text-center md:text-left mx-4 md:mx-0">
        Blockchain for Good Hackathon
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 grid-rows-8 md:grid-rows-3 mx-4 md:mx-0">
        <VideoCard />
        <KeyData />
        <Collaborate />
        <Nations />
        <LatestHackathon />
      </div>
    </div>
  );
}
