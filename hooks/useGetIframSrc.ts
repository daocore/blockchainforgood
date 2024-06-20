import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PRODUCTION_DOMAIN = "blockchainforgood.xyz"
const BETA_DOMAIN = "blockchainforgood.verce"

const BETA_URL = "https://beta.moledao.io"
const LOCAL_URL = "http://localhost:3000"


interface IOptions {
  hashPaths: {
    update: string
    create: string
  },
  eventIds: {
    production: string
    dev: string
  }
}


export function useGetInfamSrc({hashPaths, eventIds}: IOptions) {
  const [channel, setChannel] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const isProduction = window?.location?.href?.includes(PRODUCTION_DOMAIN);
    const isBeta = window?.location?.href?.includes(BETA_DOMAIN);
    const devUrl = !isBeta ? BETA_URL : LOCAL_URL;

    const hasOneTimeCode = searchParams.has("code");
    const HASH_PATH = hasOneTimeCode ? hashPaths.update : hashPaths.create;

    const latestHref = isProduction
      ? `https://www.moledao.io/${HASH_PATH}/${eventIds.production}`
      : `${devUrl}/${HASH_PATH}/${eventIds.dev}`;

    const oneTimeCode = searchParams.get("code");
    setChannel(
      hasOneTimeCode ? `${latestHref}?code=${oneTimeCode}` : latestHref
    );
  }, []);

  return channel;
}