"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { VoteForm } from "./form";
import { useAPIVoteDetail } from "./api";
import { Loading } from "../skeleton-loading";
import { useRef } from "react";
import { Successed } from "./successed";
import PosterImage from "@/assets/voting/poster.png";
import IntroImage from "@/assets/voting/intro.png";
import TitleImage from "@/assets/voting/title.png";
import { Projects } from "./projects";

export function OnSiteVoteDetail({ id, code }: { id: string; code: string }) {
  const { data, isLoading } = useAPIVoteDetail(id, code);

  const successedRef = useRef<{ onSuccessed: () => void }>();
  if (isLoading || !data) {
    return <Loading />;
  }

  const onVoteSuccessed = () => {
    successedRef.current?.onSuccessed();
  };

  if (data.isUsed) {
    return (
      <div className="w-full max-w-[768px] mx-auto mb-8">
        <Card>
          <CardContent className="text-center pt-6 text-red-500">
            Code has already been used.
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[768px] mx-auto pb-4 -mt-20 bg-oscarBlack">
      <Successed ref={successedRef} />
      <Image src={PosterImage} alt="poster" />
      <Image src={IntroImage} alt="intro" />
      <Image src={TitleImage} alt="title" />
      <Projects />
    </div>
  );
}
