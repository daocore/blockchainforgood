
import { http } from "@/lib";
import { IPageData } from "@/app/news/types";
import useSWR from "swr";
import { EventsEntity, EventsCategoryValue, IEventClassValue, ApproveValue } from "../types";

const API_PATH = {
  GET_LIST: "/events/list",
};


export function useAPIGetList() {
  const url = API_PATH.GET_LIST;
  const querys = {
    page: 1,
    pageSize: 100,
    approve: ApproveValue.APPROVED,
    classs: IEventClassValue.BGA,
    category: EventsCategoryValue.HACKTHON
  }
  return useSWR<IPageData<EventsEntity>>(
    [url],
    () =>
      http.get(API_PATH.GET_LIST, {
        params: querys,
      })
  );
}