"use client";
import { IFrameForm } from "@/components/IframePage";
import { INDIVIDUAL_PATH } from "@/constants";
import { useGetInfamSrc } from "@/hooks";

interface IProps {
  params: { id: string };
}

export default function CommonPersonForm({ params }: IProps) {
  const channel = useGetInfamSrc({
    path: INDIVIDUAL_PATH,
    eventId: params?.id,
  });

  return <IFrameForm channel={channel} id={params?.id} />;
}
