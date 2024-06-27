"use client";
import { IFrameLoading, Loading } from "@/components/Loading";
import { useGetInfamSrc } from "@/hooks";
import { Suspense } from "react";

const ORGANIZATION_HASH_PATH = "#/form/project";
const PRODUCTION_EVENT_ID = "79e37236-cdf8-41ef-9337-cfcb7a4e777e";
const DEV_EVENT_ID = "9b8c579d-3c1b-4e51-809a-1c47f226e799"; //beta
// const DEV_EVENT_ID = "b20ff37a-c94c-4165-9352-fd9667fa5a45"; //zflocal

const ELEMENT_ID = "incubation";

const IncubationForm = () => {
  return (
    <Suspense fallback={<Loading />}>
      <IncubationFormContent />
    </Suspense>
  );
};

const IncubationFormContent = () => {
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

export default IncubationForm;
