"use client";
import { IFrameForm } from "@/components/IframePage";
import { ORGANIZATION_PATH, PARTNER_EVENT_ID } from "@/constants";
import { useGetInfamSrc } from "@/hooks";
import { Suspense } from "react";

const ELEMENT_ID = "organization";

const OrgFormImpl = () => {
  const channel = useGetInfamSrc({
    path: ORGANIZATION_PATH,
    eventId: PARTNER_EVENT_ID,
  });

  return <IFrameForm channel={channel} id={ELEMENT_ID} />;
};

function OrgForm() {
  return (
    <Suspense>
      <OrgFormImpl />
    </Suspense>
  );
}

export default OrgForm;
