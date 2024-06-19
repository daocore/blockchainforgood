"use client";
import { IFrameLoading } from "@/components/Loading";
import { useEffect, useState } from "react";
import {
  BETA_DOMAIN,
  BETA_URL,
  DEV_ID,
  LOCAL_URL,
  PRODUCTION_DOMAIN,
} from "../constants";

const PersonForm = () => {
  const [personalChannel, setPersonalChannel] = useState("");
  useEffect(() => {
    const isProduction = window?.location?.href?.includes(PRODUCTION_DOMAIN);
    const isBeta = window?.location?.href?.includes(BETA_DOMAIN);
    const devUrl = !isBeta ? BETA_URL : LOCAL_URL;

    setPersonalChannel(
      isProduction
        ? `https://www.moledao.io/#/form/individual/create/230ac677-083f-4240-8f61-6a3e0d504ffd`
        : `${devUrl}/#/form/individual/create/${DEV_ID}`
    );
  }, []);
  return (
    <>
      <IFrameLoading size={60} id="person" />
      <iframe
        id={"person"}
        src={personalChannel}
        style={{
          width: "100vw",
        }}
      />
    </>
  );
};

export default PersonForm;
