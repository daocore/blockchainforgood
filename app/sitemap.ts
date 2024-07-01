import { MetadataRoute } from 'next'
import { API_PATH } from './news/api'
import { API_URL } from "@/constants";
import { PUBLISHED } from './news/enums';
import { INews, IPageData } from './news/types';


const getAllNews = async () => {
  const params = {
    publish: PUBLISHED.PUBLISHED,
    current: 1,
    pageSize: 1000,
  }
  const res = await fetch(`${API_URL}${API_PATH.GET_NEWS}?`)
  return res.json()
}
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsList = ((await getAllNews()).data as IPageData<INews>).list
  return [
    {
      url: '/',
      lastModified: new Date()
    },
    {
      url: '/news',
      lastModified: new Date()
    },
    ...newsList.map((news) => ({
      url: `/news/detail/${news.id}`,
      lastModified: news.publishDate,
    })),
    {
      url: '/incubation',
      lastModified: new Date()
    },
  ]
}