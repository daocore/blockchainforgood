import { LOCATION_HOST } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PRODUCTION_MOLEDAO_DOMAIN = "www.blockchainforgood.xyz"
const PRODUCTION_VERCEL_DOMAIN = "blockchainforgood.xyz"

const BETA_DOMAIN = "blockchainforgood.verce"


interface IOptions {
  hashPaths: {
    create: string
    update: string
  },
  eventIds: {
    production: string
    dev: string
  }
}

export function useGetIframSrc({ hashPaths, eventIds }: IOptions) {
  const [channel, setChannel] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const hasOneTimeCode = searchParams.has("code");
    const isProdENV = [PRODUCTION_MOLEDAO_DOMAIN, PRODUCTION_VERCEL_DOMAIN]?.includes(window?.location?.host);

    const latestHref = `${LOCATION_HOST}/${hasOneTimeCode ? hashPaths.update : hashPaths.create}/${isProdENV ? eventIds.production : eventIds?.dev}`;
    const oneTimeCode = searchParams.get("code");

    setChannel(
      hasOneTimeCode ? `${latestHref}/${oneTimeCode}` : latestHref
    );
  }, []);

  return channel;
}