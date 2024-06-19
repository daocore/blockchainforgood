import useSWR from "swr";
import { http, queryStrings } from "@/lib";
import type { INews, INewsDetail, INewsQuery, IPageData, ITopic, ITopicQuery } from "../types";
import useSWRInfinite from "swr/infinite";
import { PUBLISHED } from "../enums";
import { API_URL } from "@/constants";


export const API_PATH = {
  GET_NEWS_DETAIL: "/article/details",
  GET_TOPICS: "/tag/list",
  GET_NEWS: "/article/list",
}

export const SWR_OPTIONS = {
  errorRetryCount: 2,
  revalidateIfStale: false,
  dedupingInterval: 1000 * 60 * 5
}


export const INITIAL_QUERY: INewsQuery = {
  current: 1,
  pageSize: 10,
};

export async function getNewsDetail(id: string) {
  const url = API_PATH.GET_NEWS_DETAIL;
  const res = await fetch(`${API_URL}${url}?id=${id}`, { next: { revalidate: 10 } })
  return res.json()
}


export function useAPIGetNewsDetail(id: string) {
  const url = API_PATH.GET_NEWS_DETAIL;
  return useSWR<INewsDetail>([url, id], () => http.get(url, {
    params: {
      id,
    },
  }),SWR_OPTIONS)
}

export function useAPIGetTopics(querys: ITopicQuery = { current: 1, pageSize: 100 , categoryName: 'BGA' }) {
  const url = API_PATH.GET_TOPICS
  return useSWR<IPageData<ITopic>>([url, querys], () => http.get(API_PATH.GET_TOPICS, {
    params: querys,
  }), SWR_OPTIONS)
}


export function useAPIGetNews(querys: INewsQuery) {
  const url = API_PATH.GET_NEWS;
  return useSWR<IPageData<INews>>([url, querys], () => http.get(url, {
    params: {
      ...querys,
      publish: PUBLISHED.PUBLISHED
    },
  }),SWR_OPTIONS)
}

export function useAPIGetNewsInfinete(querys: INewsQuery) {
  const url = API_PATH.GET_NEWS;
  return useSWRInfinite((index, previousPageData) => {    
    if (previousPageData && previousPageData.length < querys.pageSize) return null
    return  `${url}?${queryStrings({
      ...querys,
      current: index + 1,
      publish: PUBLISHED.PUBLISHED
    })}`
  }, async (url: string) => {
    const res = await http.get(url) as IPageData<INews>
    return res.list
  }, {
    revalidateFirstPage: false
  })
}