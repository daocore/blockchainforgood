"use client";

import { IFrameLoading, Loading } from "@/components/Loading";
import { Suspense } from "react";

export const IFrameForm = ({ id, channel }: { id: string, channel: string }) => {
    return (
        <Suspense fallback={<Loading />}>
            <IFrameFormContent id={id} channel={channel} />
        </Suspense>
    );
};

const IFrameFormContent = ({ id, channel }: { id: string, channel: string }) => {

    return (
        <>
            <IFrameLoading size={60} id={id} />
            <iframe
                id={id}
                src={channel}
                style={{
                    width: "100vw",
                }}
            />
        </>
    );
};