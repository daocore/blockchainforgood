"use client";

import { IFrameForm } from "@/components/IframePage";
import { INCUBATION_EVENT_ID, ORGANIZATION_PATH } from "@/constants";
import { useGetInfamSrc } from "@/hooks";
import { Suspense } from "react";

const ELEMENT_ID = "incubation";

const IncubationFormImpl = () => {
  const channel = useGetInfamSrc({
    path: ORGANIZATION_PATH,
    eventId: INCUBATION_EVENT_ID,
  });

  return <IFrameForm channel={channel} id={ELEMENT_ID} />;
};

function IncubationForm() {
  return (
    <Suspense>
      <IncubationFormImpl />
    </Suspense>
  );
}

export default IncubationForm;
