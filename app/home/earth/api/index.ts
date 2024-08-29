
import { http } from "@/lib";
import useSWR from "swr";
import { IEvent } from "../types";

const API_PATH = {
  GET_LIST: "/eventApprove/bga/earth/list ",
};


export function useAPIGetList() {
  const url = API_PATH.GET_LIST;

  const fetcher = async () => {
    const response = (await http.get(API_PATH.GET_LIST)) as IEvent[];

    const filteredData = response.filter((item: IEvent) => !!item.location?.country);
    return filteredData;
  };

  return useSWR<IEvent[]>(
    [url],
    fetcher
  );
}