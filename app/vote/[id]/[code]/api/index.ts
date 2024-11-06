import useSWR from "swr";
import { IVote, IVoteResult, IVoteResultParams } from "../../types";
import { http, Q } from "@/lib/http";
import { ICreateOnSiteVote, IVotingResult } from "../types";
import { PROJECT_LIST, PROJECT_LOGO_MAP } from "@/app/voting/consts";
import { IProject } from "@/app/voting/types";

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

export async function APIGetVoteResult(params: IVoteResultParams) {
  const response = await Q<IVoteResult[]>(
    http.get(API_PATH.GET_VOTE_RESULT, {
      params,
      headers: {
        "Cache-Control": "no-cache",
      },
    })
  );
  const tableData = initialTableData(
    response,
    PROJECT_LIST,
    params.id
  ) as unknown as IVotingResult[];
  let isAllZero = true;
  let total = 0;
  tableData.forEach((item, index) => {
    if (isAllZero && item.count > 0) {
      isAllZero = false;
    }
    if (index === 0) {
      total = item.count;
    }
    const projectMap = PROJECT_LOGO_MAP[item.project.name as any];
    item.project.logo = projectMap?.logo;
    item.project.activeLogo = projectMap?.activeLogo;
    item.project.intro = projectMap?.intro;
    item.total = total;
  });

  if (isAllZero) {
    return tableData.sort((a, b) =>
      a.project.name.localeCompare(b.project.name)
    );
  }
  return tableData;
}

function initialTableData(
  data: IVoteResult[] = [],
  orgs: IProject[] = [],
  eventId: string
): IVoteResult[] {
  const newRes = [...data.map((item) => ({ ...item, eventId }))];

  if (data?.length === orgs?.length) {
    return newRes;
  }
  const existedProjectIds = data.map((project) => project.id);
  const notExistedProject = orgs.filter(
    (org) => !existedProjectIds.includes(org.id)
  );
  const order = newRes.length + 1;
  newRes.push(
    ...notExistedProject.map((org, index) => {
      return {
        id: org.id,
        total: 0,
        ranking: order + index,
        trend: 0,
        count: 0,
        project: org as any,
        eventId,
      };
    })
  );
  return newRes;
}

export function useAPIGetVoteResult(
  params: IVoteResultParams,
  refreshInterval: number = 10000
) {
  return useSWR<IVotingResult[]>(
    [API_PATH.GET_VOTE_RESULT, params],
    () => APIGetVoteResult(params),
    { refreshInterval }
  );
}
