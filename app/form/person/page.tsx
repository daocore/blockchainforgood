"use client";
import { IFrameLoading, Loading } from "@/components/Loading";
import { DEV_PARTNER_EVENT_ID, INDIVIDUAL_HASH_PATH, PRODUCTION_PARTNER_EVENT_ID } from "@/constants/event";
import { useGetInfamSrc } from "@/hooks";
import { Suspense } from "react";

const ELEMENT_ID = "person";

const PersonForm = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PersonFormContent />
    </Suspense>
  );
};

const PersonFormContent = () => {
  const personalChannel = useGetInfamSrc({
    hashPaths: INDIVIDUAL_HASH_PATH,
    eventIds: {
      production: PRODUCTION_PARTNER_EVENT_ID,
      dev: DEV_PARTNER_EVENT_ID,
    },
  });

  return (
    <>
      <IFrameLoading size={60} id={ELEMENT_ID} />
      <iframe
        id={ELEMENT_ID}
        src={personalChannel}
        style={{
          width: "100vw",
        }}
      />
    </>
  );
};

export default PersonForm;