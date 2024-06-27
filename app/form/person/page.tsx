"use client";
import { IFrameLoading } from "@/components/Loading";
import { useGetIframSrc } from "@/hooks";

const CREATE_HASH_PATH = "#/form/individual/create";
const UPDATE_HASH_PATH = "#/form/individual/update";
const PRODUCTION_EVENT_ID = "230ac677-083f-4240-8f61-6a3e0d504ffd";
const DEV_EVENT_ID = "090ba7c2-bc0f-4476-b58e-fe834118dd89"; //beta
// const DEV_EVENT_ID = "972ac263-0dd9-43cc-97d0-ea7fbe7477f5"; //zflocal

const ELEMENT_ID = "person";

const PersonForm = () => {
  const personalChannel = useGetIframSrc({
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
        src={personalChannel}
        style={{
          width: "100vw",
        }}
      />
    </>
  );
};

export default PersonForm;
