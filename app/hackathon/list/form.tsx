"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IFrameLoading, Loading } from "@/components/Loading";
import { useGetInfamSrc } from "@/hooks/useGetIframSrc";
import { HACKTHON_APPLY_EVENT_ID } from "@/constants/env";
import { ORGANIZATION_HASH_PATH } from "@/constants/url";
import { Suspense } from "react";

const ELEMENT_ID = "hackathon";

export const Form = () => {
  return (
    <Suspense fallback={<Loading />}>
      <FormImpl />
    </Suspense>
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
