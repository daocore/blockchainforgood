"use client";

import { IFrameForm } from "@/components/IframePage";
import { JUDGE_OR_SPEAKER_PATH } from "@/constants";
import { useGetInfamSrc } from "@/hooks";

export default function CommonGuestForm({ params }: { params: { id: string } }) {
    const channel = useGetInfamSrc({
        path: JUDGE_OR_SPEAKER_PATH,
        eventId: params?.id
    });

    return (<IFrameForm channel={channel} id={params?.id} />);
};