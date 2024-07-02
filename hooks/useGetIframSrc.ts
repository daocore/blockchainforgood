import { IFRAME_LOCATION_HOST } from "@/constants";
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
    const isProdENV = [PRODUCTION_MOLEDAO_DOMAIN, PRODUCTION_VERCEL_DOMAIN]?.includes(window?.location?.host);

    const latestHref = `${IFRAME_LOCATION_HOST}/${hashPaths}/${isProdENV ? eventIds.production : eventIds?.dev}`;

    // 在code基础上增加了referfer organization 搜索字段
    const iframeLink = !!searchParams?.size ? `${latestHref}?${searchParams.toString()}` : latestHref;

    setChannel(iframeLink);
  }, []);

  return channel;
}