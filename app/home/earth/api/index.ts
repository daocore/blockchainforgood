
import { http } from "@/lib";
import useSWR from "swr";
import { IEvent } from "../types";

const API_PATH = {
  GET_LIST: "/eventApprove/bga/earth/list ",
};


export function useAPIGetList() {
  const url = API_PATH.GET_LIST;
  return useSWR<IEvent[]>(
    [url],
    () =>
      http.get(API_PATH.GET_LIST)
  );
}