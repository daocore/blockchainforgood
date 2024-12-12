import { MetadataRoute } from "next";
import { API_PATH } from "./news/api";
import { API_URL, VISITED_PRODUCTION_URL } from "@/constants";
import { PUBLISHED } from "./news/enums";
import { INews, IPageData } from "./news/types";

const getAllNews = async () => {
  const res = await fetch(
    `${API_URL}${API_PATH.GET_NEWS}?publish=${PUBLISHED.PUBLISHED}&current=1&pageSize=200`
  );
  return res.json();
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsList = ((await getAllNews()).data as IPageData<INews>).list ?? [];
  return [
    {
      url: VISITED_PRODUCTION_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: VISITED_PRODUCTION_URL + "news",
      lastModified: new Date(),
      priority: 0.5,
    },
    ...newsList.map((news) => ({
      url: VISITED_PRODUCTION_URL + `news/detail/${news.id}`,
      lastModified: news.publishDate,
      priority: 0.8,
    })),
    {
      url: VISITED_PRODUCTION_URL + "incubation",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
