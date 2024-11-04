import useSWR from "swr";
import { IVote, IVoteResult, IVoteResultParams } from "../../types";
import { http, Q } from "@/lib/http";
import { ICreateOnSiteVote } from "../types";

const API_PATH = {
  GET_DETAIL: "/vote/details/on-site",
  CREATE_VOTE: "/vote/on-site",
  GET_VOTE_RESULT: "/vote/vote/result",
};

export function useAPIVoteDetail(id: string, code: string) {
  const url = API_PATH.GET_DETAIL;
  const querys = {
    id,
    code,
  };

  const fetcher = async () => {
    const response = (await Q(
      http.get(url, {
        params: querys,
        headers: {
          "Cache-Control": "no-cache",
        },
      })
    )) as IVote;

    if (!response.isUsed) {
      let loc = {
        city: "-",
        area: "-",
      };
      try {
        loc = JSON.parse(response.event.location);
      } catch (error) {}
      const location =
        response.event.online === 1
          ? "ONLINE"
          : (loc?.city ? loc?.city + ", " : "") + loc?.area;
      response.event.location = location;
    }
    return response;
  };

  return useSWR<IVote>([url, querys], fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      return;
    },
  });
}

export function APICreateVote(data: ICreateOnSiteVote) {
  return Q(http.post(API_PATH.CREATE_VOTE, data));
}

export function APIGetVoteResult(params: IVoteResultParams) {
  return Q<IVoteResult[]>(
    http.get(API_PATH.GET_VOTE_RESULT, {
      params,
      headers: {
        "Cache-Control": "no-cache",
      },
    })
  );
}

export function useAPIGetVoteResult(
  params: IVoteResultParams,
  refreshInterval: number = 10000
) {
  return useSWR<IVoteResult[]>(
    [API_PATH.GET_VOTE_RESULT, params],
    () => APIGetVoteResult(params),
    { refreshInterval }
  );
}
