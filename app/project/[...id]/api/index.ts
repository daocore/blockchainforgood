import { http } from "@/lib";
import { EventsApproveEntity, IParams } from "../types";
import useSWR from "swr";

const API_PATH = {
  GET_DETAIL: "/eventApprove/bga/details",
};

export function useAPIGetProjectDetail(querys: IParams) {
  const url = API_PATH.GET_DETAIL;

  const fetcher = async () => {
    const response = (await http.get(url, {
      params: querys,
      headers: {
        "Cache-Control": "no-cache",
      },
    })) as EventsApproveEntity;
    return response;
  };

  return useSWR<EventsApproveEntity>([url, querys], fetcher);
}
