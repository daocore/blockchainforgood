import useSWR from "swr";
import { http, queryStrings } from "@/lib";
import type { IArticle, IArticleDetail, IArticleQuery, IPageData, ITopic, ITopicQuery } from "../types";
import useSWRInfinite from "swr/infinite";
import { PUBLISHED } from "../enums";


export const API_PATH = {
  GET_ARTICLE_DETAIL: "/article/details",
  GET_TOPICS: "/tag/list",
  GET_ARITCLES: "/article/list",
}


export const INITIAL_QUERY: IArticleQuery = {
  current: 1,
  pageSize: 10,
};

export function useAPIGetArticleDetail(id: string) {
  const url = API_PATH.GET_ARTICLE_DETAIL;
  return useSWR<IArticleDetail>([url, id], () => http.get(url, {
    params: {
      id,
    },
  }))
}

export function useAPIGetTopics(querys: ITopicQuery = { current: 1, pageSize: 100 , categoryName: 'BGA' }) {
  const url = API_PATH.GET_TOPICS
  return useSWR<IPageData<ITopic>>([url, querys], () => http.get(API_PATH.GET_TOPICS, {
    params: querys,
  }))
}


export function useAPIGetNews(querys: IArticleQuery) {
  const url = API_PATH.GET_ARITCLES;
  return useSWR<IPageData<IArticle>>([url, querys], () => http.get(url, {
    params: {
      ...querys,
      publish: PUBLISHED.PUBLISHED
    },
  }))
}

export function useAPIGetNewsInfinete(querys: IArticleQuery) {
  const url = API_PATH.GET_ARITCLES;
  return useSWRInfinite((index, previousPageData) => {    
    if (previousPageData && previousPageData.length < querys.pageSize) return null
    return  `${url}?${queryStrings({
      ...querys,
      current: index + 1,
      publish: PUBLISHED.PUBLISHED
    })}`
  }, async (url: string) => {
    const res = await http.get(url) as IPageData<IArticle>
    return res.list
  }, {
    revalidateFirstPage: false
  })
}