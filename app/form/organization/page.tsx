"use client";
import { IFrameLoading } from "@/components/Loading";
import { useGetInfamSrc } from "@/hooks";
import { Suspense } from "react";

const ORGANIZATION_HASH_PATH = "#/form/project";
const PRODUCTION_EVENT_ID = "230ac677-083f-4240-8f61-6a3e0d504ffd";
const DEV_EVENT_ID = "090ba7c2-bc0f-4476-b58e-fe834118dd89"; //beta
// const DEV_EVENT_ID = "972ac263-0dd9-43cc-97d0-ea7fbe7477f5"; //zflocal

const ELEMENT_ID = "organization";

const OrgForm = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrgFormContent />
    </Suspense>
  );
};

const OrgFormContent = () => {
  const organizationalChannel = useGetInfamSrc({
    hashPaths: ORGANIZATION_HASH_PATH,
    eventIds: {
      production: PRODUCTION_EVENT_ID,
      dev: DEV_EVENT_ID,
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
