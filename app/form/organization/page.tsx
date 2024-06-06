"use client";
import { Loading } from "@/components/Loading";
import { useEffect, useState } from "react";
import {
  BETA_DOMAIN,
  BETA_URL,
  DEV_ID,
  LOCAL_URL,
  PRODUCTION_DOMAIN,
} from "../constants";

const OrgForm = () => {
  const [organizationalChannel, setOrganizationalChannel] = useState("");
  useEffect(() => {
    const isProduction = window?.location?.href?.includes(PRODUCTION_DOMAIN);
    const isBeta = window?.location?.href?.includes(BETA_DOMAIN);
    const devUrl = isBeta ? BETA_URL : LOCAL_URL;

    setOrganizationalChannel(
      isProduction
        ? `https://www.moledao.io/#/form/project/create/230ac677-083f-4240-8f61-6a3e0d504ffd`
        : `${devUrl}/#/form/project/create/${DEV_ID}`
    );
  }, []);
  return (
    <>
      <Loading size={60} id={"organization"} />
      <iframe
        id={"organization"}
        src={organizationalChannel}
        style={{
          width: "100vw",
        }}
      />
    </>
  );
};

export default OrgForm;
