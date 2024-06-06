import useSWR from "swr";
import { Q, http } from "@/lib";
import type { IBlog, IBlogDetail, IBlogsQuery, IPageData } from "../types";

export const API_PATH = {
  GET_BLOGS: "/events/list",
  GET_BLOG_DETAIL: "/events/details",

}


export const INITIAL_QUERY: IBlogsQuery = {
  current: 1,
  pageSize: 10,
};

export function useAPIGetBlogs(query: IBlogsQuery) {
  const url = API_PATH.GET_BLOGS;
  return useSWR<IPageData<IBlog>>([url, query], () => http.get(url, {
    params: query,
  }))
} 

export function useAPIGetBlogDetail(id: string) {
  const url = API_PATH.GET_BLOG_DETAIL;
  return useSWR<IBlogDetail>([url, id], () => http.get(url, {
    params: {
      id,
    },
  }))
}