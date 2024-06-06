"use client";
import { Loading } from "@/components/Loading";
import { organizationalChannel } from "../constants";

const OrgForm = () => {
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
