import { COUNTRIES } from "@/app/home/earth/const";
import { IMAGE_URL } from "@/constants/url";
import Image from "next/image";
import dayjs from "dayjs";
import { CalendarPlus, MapPin } from "lucide-react";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { EventsApproveEntity } from "./types";
import { Links } from "./links";
import Link from "next/link";
import { OrganizationEntity } from "@/app/square/types";

export function Detail({ item }: { item: EventsApproveEntity }) {
  const { organization = {} as OrganizationEntity } = item;

  const links = organization.links ?? [];

  const location = organization.location
    ? JSON.parse(organization.location)
    : {};

  return (
    <div className="w-full md:w-content mx-auto pb-16">
      <div>
        <Image
          className="w-full object-contain max-h-80"
          width={1920}
          height={320}
          src={`${IMAGE_URL}${organization.logo}`}
          alt={organization.name}
        />
      </div>

      <div className="mt-8">
        <h1 className="text-4xl font-bold border-b-2 py-4 border-gray-300">
          {organization.name}
        </h1>
        <div className="border-b-2 py-4 border-gray-300 grid grid-cols-2 gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="space-x-2">
                  <span>
                    <MapPin className="inline-block mr-1 w-5 h-5" />
                  </span>
                  <span>{COUNTRIES[location.country]}</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>Location</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <div className="space-x-2">
                  <span>
                    <CalendarPlus className="inline-block mr-1 w-5 h-5" />
                  </span>
                  <span>
                    {dayjs(new Date(organization.createDate)).format(
                      "DD/MM/YYYY"
                    )}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>Created on</TooltipContent>
            </Tooltip>
            <Links data={links} />
          </TooltipProvider>
        </div>

        <div className="space-y-4 mt-4">
          <Description title="Introduction">{organization.intro}</Description>
          <Description title="Label">
            <div className="space-x-2">
              {organization.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-[#B6B6BF]  px-2 py-1 whitespace-nowrap"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </Description>
          <DiyformDescription data={item.diyform} />
        </div>
      </div>
    </div>
  );
}

function Description({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-2xl font-bold py-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
}

function DiyformDescription({
  data = [],
}: {
  data: Array<{ label: string; value: string; type: string }>;
}) {
  return data.map((item) => {
    let children: React.ReactNode = item.value;
    if (item.type === "file") {
      const href = IMAGE_URL + item.value;
      children = <Link href={href} className="text-bgaActive flex item-center gap-2" target="_blank">Link <svg viewBox="0 0 1024 1024" className="mt-[3px]" version="1.1" xmlns="http://www.w3.org/2000/svg" id="mx_n_1726213104869" width="16" height="16"><path d="M924.402464 1023.068211H0.679665V99.345412h461.861399v98.909208H99.596867v725.896389h725.896389V561.206811h98.909208z" fill="#00d5bf"></path><path d="M930.805104 22.977336l69.965436 69.965436-453.492405 453.492404-69.965435-69.901489z" fill="#00d5bf"></path><path d="M1022.464381 304.030081h-98.917201V99.345412H709.230573V0.428211h313.233808z" fill="#00d5bf"></path></svg></Link>;
    }
    return (
      <Description key={item.label} title={item.label}>
        {children}
      </Description>
    );
  });
}
