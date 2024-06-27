"use client";
import { LOCATION_HOST } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PRODUCTION_MOLEDAO_DOMAIN = "www.blockchainforgood.xyz"
const PRODUCTION_VERCEL_DOMAIN = "blockchainforgood.xyz"

interface IOptions {
  hashPaths: string,
  eventIds: {
    production: string
    dev: string
  }
}

export function useGetInfamSrc({ hashPaths, eventIds }: IOptions) {
  const [channel, setChannel] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const hasOneTimeCode = searchParams.has("code");
    const isProdENV = [PRODUCTION_MOLEDAO_DOMAIN, PRODUCTION_VERCEL_DOMAIN]?.includes(window?.location?.host);

    const latestHref = `${LOCATION_HOST}/${hashPaths}/${isProdENV ? eventIds.production : eventIds?.dev}`;
    const oneTimeCode = searchParams.get("code");

    setChannel(
      hasOneTimeCode ? `${latestHref}/${oneTimeCode}` : latestHref
    );
  }, []);

  return channel;
}