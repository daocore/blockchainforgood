import useSWR from "swr";
import {
  ICreateVote,
  IEmail,
  IVote,
  IVoteResult,
  IVoteResultParams,
} from "../types";
import { http, Q } from "@/lib/http";

const API_PATH = {
  GET_DETAIL: "/vote/details",
  CREATE_VOTE: "/vote/visitor",
  SEND_EMAIL_CODE: "/email/captcha",
  GET_VOTE_RESULT: "/vote/vote/result",
};

export function useAPIVoteDetail(id: string) {
  const url = API_PATH.GET_DETAIL;
  const querys = {
    id,
  };

  const fetcher = async () => {
    const response = (await Q(
      http.get(url, {
        params: querys,
      })
    )) as IVote;
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

export function APICreateVote(data: ICreateVote) {
  return Q(http.post(API_PATH.CREATE_VOTE, data));
}

export function APISendEmailCode(data: IEmail) {
  return Q(http.post(API_PATH.SEND_EMAIL_CODE, data));
}

export function APIGetVoteResult(params: IVoteResultParams) {
  return Q<IVoteResult[]>(
    http.get(API_PATH.GET_VOTE_RESULT, {
      params,
    })
  );
}

export function useAPIGetVoteResult(params: IVoteResultParams) {
  return useSWR<IVoteResult[]>(
    [API_PATH.GET_VOTE_RESULT, params],
    () => APIGetVoteResult(params),
    { refreshInterval: 10000 }
  );
}