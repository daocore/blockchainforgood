"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import { VoteForm } from "./form";
import { Separator } from "@/components/ui/separator";
import { APIGetVoteResult, useAPIVoteDetail } from "./api";
import { IMAGE_URL } from "@/constants";
import { Loading } from "./skeleton-loading";
import { getTime, getTimeData, getTimeZone } from "./utils";
import { useEffect, useRef } from "react";
import { Successed } from "./successed";
import VoteDetailCoverImage from "@/assets/vote/bg.jpeg";

export function VoteDetail({ id }: { id: string }) {
  const { data, isLoading } = useAPIVoteDetail(id);
  useEffect(() => {
    if (data) {
      APIGetVoteResult({
        id,
      }).then((res) => {
        console.log(res);
      });
    }
  }, [data]);

  const successedRef = useRef<{ onSuccessed: () => void }>();
  if (isLoading || !data) {
    return <Loading />;
  }

  const onVoteSuccessed = () => {
    successedRef.current?.onSuccessed();
  };

  return (
    <div className="w-full max-w-[768px] mx-auto mb-8">
      <Successed ref={successedRef} />

      <Card>
        <Image
          // src={`${IMAGE_URL}${data.event.cover}`}
          src={VoteDetailCoverImage}
          alt={data.event.name}
          className="h-full w-full object-contain rounded-md"
        />
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardDescription className="text-typography text-base">
            {data.name}
          </CardDescription>
          <CardTitle>{data.event.name}</CardTitle>
          <CardDescription>{data.event.intro}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={`${IMAGE_URL}${data.event.belonging.logo}`}
                alt="logo"
                width={40}
                height={40}
                className="felx-none"
              />
            </div>
            <div className="">
              <p className="text-description text-sm">Organized by:</p>
              <p className="font-bold text-sm">{data.event.belonging.name}</p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <p className="font-semibold">Information</p>
            <div className="flex items-center gap-2 text-sm">
              <Clock3 className="w-5 h-5" />
              <div className="flex gap-2">
                <div className="flex flex-col gap-2">
                  <span>{getTimeData(data.stimestampms)}</span>
                  <div className="flex">
                    <span>{getTime(data.stimestampms)}</span>
                    <div className="text-xs -mt-[2px]">
                      (GMT {getTimeZone(data.stimestampms)})
                    </div>
                  </div>
                </div>
                <span>-</span>
                <div className="flex flex-col gap-2">
                  <span>{getTimeData(data.etimestampms)}</span>
                  <div className="flex">
                    <span>{getTime(data.etimestampms)}</span>
                    <div className="text-xs -mt-[2px]">
                      (GMT {getTimeZone(data.etimestampms)})
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-5 h-5" />
              <span>{data.event.location}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardContent className="pt-6">
          <VoteForm
            id={id}
            orgs={data.organizations}
            onSuccessed={onVoteSuccessed}
          />
        </CardContent>
      </Card>
    </div>
  );
}
