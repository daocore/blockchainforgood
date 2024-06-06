"use client";
import { Loading } from "@/components/Loading";
import { personalChannel } from "../constants";

const PersonForm = () => {
  return (
    <>
      <Loading size={60} id="person" />
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
