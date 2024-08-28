"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IFrameLoading, Loading } from "@/components/Loading";
import { useGetInfamSrc } from "@/hooks/useGetIframSrc";
import { INCUBATION_EVENT_ID } from "@/constants/env";
import { ORGANIZATION_HASH_PATH } from "@/constants/url";
import { Suspense } from "react";
import HackathonImage from "@/assets/hackathon.png";
import Image from "next/image";

const ELEMENT_ID = "hackathon";

export const Form = () => {
  return (
    <div className="bg-white p-6 space-y-6">
      <h4 className="flex items-center font-bold text-black">
        <Image src={HackathonImage} alt="Hackathon" width={31} height={31} />
        Apply Now
      </h4>
      <Divider text="BAG Hackathon Program" />
      <p className="text-xs text-[#9fa2a5]">
        Are you hosting a hackathon and want to integrate sustainability into
        your event?
      </p>
      <p className="text-xs text-[#9fa2a5]">
        Join the BGA Hackathon Program! By adding a BGA track, you'll gain
        access to our prize pool, expert judges, and enhanced visibility. Apply
        now and let's work together to drive innovation for a sustainable
        future!
      </p>
      <Suspense fallback={<Loading />}>
        <FormImpl />
      </Suspense>
    </div>
  );
};

function FormImpl() {
  const organizationalChannel = useGetInfamSrc({
    hashPaths: ORGANIZATION_HASH_PATH,
    eventId: INCUBATION_EVENT_ID,
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="w-full cursor-pointer hover:border-main hover:border-text hover:bg-text h-8 px-6 border border-active text-center text-text text-sm font-medium font-['Inter'] leading-[14px] hover:text-main flex justify-center items-center">
          Apply
        </div>
      </DialogTrigger>
      <DialogContent className="w-screen max-w-screen-lg h-4/5">
        <IFrameLoading size={60} id={ELEMENT_ID} className="w-full h-full" />
        <iframe
          id={ELEMENT_ID}
          src={organizationalChannel}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

function Divider({ text }: { text: string }) {
  return (
    <div
      style={{
        width: "calc(100% + 3rem)",
        marginLeft: "-1.5rem",
        marginRight: "-1.5rem",
      }}
      className="flex items-center gap-1"
    >
      <div className="w-6 flex-none border-b border-gray-300" />
      <span className="text-xs text-black font-[Inter] whitespace-nowrap">
        {text}
      </span>
      <div className="w-full flex-auto border-b border-gray-300" />
    </div>
  );
}
