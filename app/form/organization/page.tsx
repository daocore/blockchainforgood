"use client";
import { IFrameLoading, Loading } from "@/components/Loading";
import { ORGANIZATION_HASH_PATH, PARTNER_EVENT_ID } from "@/constants";
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
    eventId: PARTNER_EVENT_ID
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
