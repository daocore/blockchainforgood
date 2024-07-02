"use client";
import { IFrameLoading, Loading } from "@/components/Loading";
import { DEV_PARTNER_EVENT_ID, ORGANIZATION_HASH_PATH, PRODUCTION_PARTNER_EVENT_ID } from "@/constants/event";
import { useGetInfamSrc } from "@/hooks";
import { Suspense } from "react";

const ELEMENT_ID = "organization";

const OrgForm = () => {
  return (
    <Suspense fallback={<Loading />}>
      <OrgFormContent />
    </Suspense>
  );
};

const OrgFormContent = () => {
  const organizationalChannel = useGetInfamSrc({
    hashPaths: ORGANIZATION_HASH_PATH,
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
        src={organizationalChannel}
        style={{
          width: "100vw",
        }}
      />
    </>
  );
};

export default OrgForm;
