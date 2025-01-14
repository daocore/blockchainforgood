"use client";

import { useParams } from "next/navigation";
import { useAPIGetEventDetail } from "../api";
import { EventsEntity } from "../types";
import { parseAssets } from "../utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import LocationImage from "@/assets/hackathon/location.png";
import TimeImage from "@/assets/hackathon/calendar-check.png";
import Image from "next/image";
import { cn } from "@/lib";
import { getUTCTime } from "@/lib/date";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks";
import { RawImage } from "@/components/Image";
import styles from "./index.module.css";
import { Skeleton } from "@/components/ui/skeleton";

export function Header() {
  const { id } = useParams<{ id: string }>();

  const { data = {} as EventsEntity, isLoading } = useAPIGetEventDetail(id);

  if (isLoading) {
    return <Skeleton className="h-96" />;
  }

  return (
    <div className={cn("w-full relative", styles.header)}>
      <Title item={data} />
      <AssestList item={data} />
    </div>
  );
}

function Title({ item }: { item: EventsEntity }) {
  const { location, name, stimestampms } = item;

  const locationObj = location ? JSON.parse(location) : {};

  const startDate = stimestampms
    ? getUTCTime(+stimestampms).format("MMM DD, YYYY")
    : "";
  return (
    <div className="absolute top-0 left-0 w-full z-10 pt-6 pl-6">
      <div className="max-w-content mx-auto space-y-6">
        <h2 className="text-white font-bold text-5xl w-1/2">{name}</h2>
        <div className="text-2xl font-bold text-white space-x-4">
          {startDate && (
            <span className="inline-flex gap-2">
              <Image
                alt="location w-8 h-8"
                width={36}
                height={36}
                src={TimeImage}
              />
              {startDate}
            </span>
          )}
          {locationObj?.area && (
            <span className="inline-flex gap-2">
              <Image
                alt="location w-8 h-8"
                width={36}
                height={36}
                src={LocationImage}
              />
              {locationObj?.area}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function AssestList({ item }: { item: EventsEntity }) {
  const { assets, cover } = item;
  const rawAssetsList = [...parseAssets(assets), cover].filter(Boolean);

  const [api, setApi] = useState<CarouselApi>();

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  const onScrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="relative min-h-80">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {rawAssetsList.map((asset, index) => (
            <CarouselItem key={index}>
              <div className="flex">
                <RawImage
                  src={asset}
                  key={asset}
                  className={cn(
                    "w-full max-h-[75vh] object-contain"
                  )}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <CarouselNavigate
        cur={selectedIndex}
        onScrollTo={onScrollTo}
        assetsList={rawAssetsList}
      />
    </div>
  );
}

interface CarouselNavigateProps {
  cur: number;
  assetsList: string[];
  onScrollTo: (index: number) => void;
}

function CarouselNavigate(props: CarouselNavigateProps) {
  const isMobile = useIsMobile();

  if (props.assetsList.length <= 1) return null;

  if (isMobile) {
    return <CarouselNavigateMobile {...props} />;
  }

  return <CarouselNavigateImpl {...props} />;
}

function CarouselNavigateImpl({
  cur,
  assetsList,
  onScrollTo,
}: CarouselNavigateProps) {
  return (
    <div className="absolute bottom-8 right-8 space-x-3">
      {assetsList.map((_, index) => (
        <span
          className={cn(
            "text-white/45 font-bold text-[32px] cursor-pointer",
            cur === index && "text-white"
          )}
          onClick={() => onScrollTo(index)}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

function CarouselNavigateMobile({
  cur,
  assetsList,
  onScrollTo,
}: CarouselNavigateProps) {
  return (
    <div className="flex justify-center item-center gap-2 py-4">
      {assetsList.map((_, index) => (
        <span
          className={cn(
            "w-2 h-2 rounded-full bg-[#c4c4c4] cursor-pointer",
            cur === index && "bg-black"
          )}
          onClick={() => onScrollTo(index)}
        ></span>
      ))}
    </div>
  );
}
