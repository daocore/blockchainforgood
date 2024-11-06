"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { APICreateVote, useAPIVoteDetail } from "./api";
import { Loading } from "../skeleton-loading";
import { ReactNode, useRef } from "react";
import { Successed } from "./successed";
import PosterImage from "@/assets/voting/poster.png";
import IntroImage from "@/assets/voting/intro.png";
import TitleImage from "@/assets/voting/title.png";
import { Projects } from "./projects";
import { encryptToken } from "../actions";

export function OnSiteVoteDetail({ id, code }: { id: string; code: string }) {
  const { data, isLoading } = useAPIVoteDetail(id, code);

  const successedRef = useRef<{ onSuccessed: () => void }>();
  if (isLoading || !data) {
    return <Loading />;
  }

  const onVoteSuccessed = () => {
    successedRef.current?.onSuccessed();
  };

  const onVoteSubmiting = async (projectId: string) => {
    const apiData = {
      id,
      code,
      candidates: [projectId],
    };
    const token = await encryptToken(JSON.stringify(apiData));
    await APICreateVote({
      ...apiData,
      token,
    });
    onVoteSuccessed();
  };

  if (data.isUsed) {
    return (
      <WarnningTip>
        You have already cast your vote, One QR code can only be used to vote
        once.
      </WarnningTip>
    );
  }

  if (data.isInvalid) {
    return (
      <WarnningTip>
        The url is invalid. Please check the url and try again.
      </WarnningTip>
    );
  }

  return (
    <div className="w-full max-w-[768px] mx-auto pb-4 -mt-20 bg-oscarBlack">
      <Successed ref={successedRef} />
      <Image src={PosterImage} alt="poster" />
      <Image src={IntroImage} alt="intro" />
      <Image src={TitleImage} alt="title" />
      <Projects onVoting={onVoteSubmiting} weight={data.weight} />
    </div>
  );
}

function WarnningTip({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[768px] mx-auto h-[calc(100vh-197px)] -mt-12 bg-oscarBlack">
      <div className="h-full text-darkGray text-lg px-6 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
