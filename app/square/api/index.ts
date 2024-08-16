
import { http, queryStrings } from "@/lib";
import { EventsApproveEntity, IGetListParams } from "../types";
import { IPageData } from "@/app/news/types";
import useSWR from "swr";
import { SWR_OPTIONS } from "@/app/news/api";
import useSWRInfinite from "swr/infinite";

const API_PATH = {
  GET_LIST: "/eventApprove/list",
};


export function useAPIGetNewsInfinete(querys: IGetListParams) {
  const url = API_PATH.GET_LIST;
  return useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && previousPageData.length < querys.pageSize)
        return null;
      return `${url}?${queryStrings({
        ...querys,
        current: index + 1,
      })}`;
    },
    async (url: string) => {
      const res = (await http.get(url)) as IPageData<EventsApproveEntity>;
      return res.list || [];
    },
    {
      revalidateFirstPage: false,
    }
  );
}