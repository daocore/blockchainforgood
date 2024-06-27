"use client";
import { IFrameLoading } from "@/components/Loading";
import { useGetIframSrc } from "@/hooks/useGetIframSrc";

const CREATE_HASH_PATH = "#/form/individual/create";
const UPDATE_HASH_PATH = "#/form/individual/update";
const PRODUCTION_EVENT_ID = "230ac677-083f-4240-8f61-6a3e0d504ffd";
const DEV_EVENT_ID = "9b8c579d-3c1b-4e51-809a-1c47f226e799";

const ELEMENT_ID = "incubation";

export default function IncubationForm() {
  const inbucationChannel = useGetIframSrc({
    hashPaths: {
      update: UPDATE_HASH_PATH,
      create: CREATE_HASH_PATH,
    },
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
        src={inbucationChannel}
        style={{
          width: "100vw",
        }}
      />
    </>
  );
}
