import { MOLEDAO_IFRAME_URL } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IOptions {
  hashPaths: string,
  eventId: string
}

export function useGetInfamSrc({ hashPaths, eventId }: IOptions) {
  const [channel, setChannel] = useState("");

  const searchParams = useSearchParams();

  useEffect(() => {
    const latestHref = `${MOLEDAO_IFRAME_URL}/${hashPaths}/${eventId}`;

    // 在code基础上增加了referfer organization 搜索字段 size在safari中拿不到
    const iframeLink = !![...searchParams?.entries()]?.length ? `${latestHref}?${searchParams.toString()}` : latestHref;

    setChannel(iframeLink);
  }, []);

  return channel;
}