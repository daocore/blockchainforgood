import { BASE_URL, LOCATION_HOST } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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

    const latestHref = `${LOCATION_HOST}/${hashPaths}/${process.env.NODE_ENV === "production" ? eventIds.production : eventIds?.dev}`;
    const oneTimeCode = searchParams.get("code");

    setChannel(
      hasOneTimeCode ? `${latestHref}/${oneTimeCode}` : latestHref
    );
  }, []);

  return channel;
}