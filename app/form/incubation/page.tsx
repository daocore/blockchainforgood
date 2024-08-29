"use client";

import { IFrameForm } from "@/components/IframePage";
import { INCUBATION_EVENT_ID, ORGANIZATION_PATH } from "@/constants";
import { useGetInfamSrc } from "@/hooks";

const ELEMENT_ID = "incubation";

const IncubationForm = () => {
  const channel = useGetInfamSrc({
    path: ORGANIZATION_PATH,
    eventId: INCUBATION_EVENT_ID
  });

  return (<IFrameForm channel={channel} id={ELEMENT_ID} />);
};

export default IncubationForm;
