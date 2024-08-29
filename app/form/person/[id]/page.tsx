"use client";
import { IFrameForm } from "@/components/IframePage";
import { INDIVIDUAL_PATH } from "@/constants";
import { useGetInfamSrc } from "@/hooks";

export default function CommonPersonForm({ params }: { params: { id: string } }) {
    const channel = useGetInfamSrc({
        path: INDIVIDUAL_PATH,
        eventId: params?.id
    });

    return (<IFrameForm channel={channel} id={params?.id} />);
};