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
import { IMAGE_URL } from "@/constants";
import { getUTCTime } from "@/lib/date";
import Autoplay from "embla-carousel-autoplay";

export function Header() {
  const { id } = useParams<{ id: string }>();

  const { data = {} as EventsEntity, isLoading } = useAPIGetEventDetail(id);

  return (
    <div className="w-full relative">
      <Title item={data} />
      <AssestList item={data} />
    </div>
  );
}

function Title({ item }: { item: EventsEntity }) {
  const { location, name, stimestampms } = item;

  const locationObj = location ? JSON.parse(location) : {};

  const startDate = getUTCTime(+stimestampms).format("MMM DD, YYYY");
  return (
    <div className="absolute top-0 left-0 w-full z-10 pt-6 pl-6">
      <div className="max-w-content mx-auto space-y-6">
        <h2 className="text-white font-bold text-5xl w-1/2">{name}</h2>
        <div className="text-2xl font-bold text-white space-x-4">
          <span className="inline-flex gap-2">
            <Image
              alt="location w-8 h-8"
              width={36}
              height={36}
              src={TimeImage}
            />
            {startDate}
          </span>
          <span className="inline-flex gap-2">
            <Image
              alt="location w-8 h-8"
              width={36}
              height={36}
              src={LocationImage}
            />
            {locationObj?.area}
          </span>
        </div>
      </div>
    </div>
  );
}

function AssestList({ item }: { item: EventsEntity }) {
  const { assets, cover } = item;
  const rawAssetsList = [...parseAssets(assets), cover].filter(Boolean);

  const [api, setApi] = useState<CarouselApi>();

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {rawAssetsList.map((asset, index) => (
          <CarouselItem key={index}>
            <div className="flex">
              <img
                key={asset}
                src={`${IMAGE_URL}${asset}`}
                alt={asset}
                className={cn("w-full aspect-video object-cover col-span-1")}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
