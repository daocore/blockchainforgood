import useSWR from "swr";
import { http } from "@/lib";
import type { IBlog, IBlogDetail, IBlogsQuery, IPageData } from "../types";



export function useAPIGetBlogs(query: IBlogsQuery) {
  const url = "/events/list";
  return useSWR<IPageData<IBlog>>([url, query], () => http.get(url, {
    params: query,
  }))
} 

export function useAPIGetBlogDetail(id: string) {
  const url = "/events/details";
  return useSWR<IBlogDetail>([url, id], () => http.get(url, {
    params: {
      id,
    },
  }))
}