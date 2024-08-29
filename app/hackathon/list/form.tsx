"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IFrameLoading, Loading } from "@/components/Loading";
import { useGetInfamSrc } from "@/hooks/useGetIframSrc";
import { HACKTHON_APPLY_EVENT_ID } from "@/constants/env";
import { ORGANIZATION_HASH_PATH } from "@/constants/url";
import { Suspense } from "react";
import HackathonImage from "@/assets/hackathon.png";
import Image from "next/image";

const ELEMENT_ID = "hackathon";

export const Form = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, #02CCB7 0%, #47E6D6 70%, #8DF7EC 100%)",
      }}
      className="bg-white p-6 space-y-6"
    >
      <h4 className="flex items-center font-bold text-black">
        <Image src={HackathonImage} alt="Hackathon" width={31} height={31} />
        Apply Now
      </h4>
      <p className="text-xs text-typography">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p className="text-xs text-typography">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    eventId: HACKTHON_APPLY_EVENT_ID,
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          style={{
            background: "linear-gradient(0deg, #97F6EC 0%, #FFFFFF 100%)",
          }}
          className="w-full cursor-pointer hover:shadow-lg h-8 px-6 text-center text-text text-sm font-medium font-['Inter'] leading-[14px] flex justify-center items-center"
        >
          Apply
        </div>
      </DialogTrigger>
      <DialogContent
        onPointerDownOutside={(e) => e.preventDefault()}
        className="w-screen max-w-screen-lg h-4/5"
      >
        <div className="relative overflow-y-auto">
          <h3 className="text-main text-2xl font-bold pb-4 px-3 md:px-10 m-auto">
            Hackathon Collaberation Application Form
          </h3>
          <IFrameLoading size={60} id={ELEMENT_ID} className="w-full h-full" />
          <iframe
            id={ELEMENT_ID}
            src={organizationalChannel}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
