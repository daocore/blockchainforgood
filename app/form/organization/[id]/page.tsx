"use client";

import { IFrameForm } from "@/components/IframePage";
import { ORGANIZATION_PATH } from "@/constants";
import { useGetInfamSrc } from "@/hooks";

export default function CommonOrganizationForm({ params }: { params: { id: string } }) {
    const channel = useGetInfamSrc({
        path: ORGANIZATION_PATH,
        eventId: params?.id
    });

    return (<IFrameForm channel={channel} id={params?.id} />);
};