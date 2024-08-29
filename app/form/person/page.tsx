"use client";
import { IFrameForm } from "@/components/IframePage";
import { INDIVIDUAL_PATH, PARTNER_EVENT_ID } from "@/constants";
import { useGetInfamSrc } from "@/hooks";

const ELEMENT_ID = "person";

const PersonForm = () => {
  const channel = useGetInfamSrc({
    path: INDIVIDUAL_PATH,
    eventId: PARTNER_EVENT_ID
  });

  return (<IFrameForm channel={channel} id={ELEMENT_ID} />);
};

export default PersonForm;