import { NEWS_TYPE, PLATFORM, PUBLISHED } from "./enums";

export interface INews {
  id: string;
  name: string;
  cover: string;
  updateDate: string;
  intro: string;
  publish: PUBLISHED.DRAFT | PUBLISHED.PUBLISHED;
  type: NEWS_TYPE.BGA_WEEKLY_PROGRESS_PULSE | NEWS_TYPE.BYBIT_BGA | NEWS_TYPE.RREAL_TALK_CASE_STUDY;
  platform: PLATFORM.MOLEDAO | PLATFORM.BGA
  views: number
  tags: ITopic[]
  content: {
    id: number
    content: string
    updateDate: string
  
  }
}

export interface IPageData<T> {
  total: number;
  list: T[];
}

export interface INewsDetail extends INews {
  author: {
    avatar: string
    id: number
    link: string
    name: string
  }
}

export interface INewsQuery {
  current: number;
  pageSize: number;
  keyword?: string;
  tags?: number;
  publish?: PUBLISHED.DRAFT | PUBLISHED.PUBLISHED;
  type?: number;
  platform?: PLATFORM.MOLEDAO | PLATFORM.BGA;
}

export interface ITopic {
  id: number;
  sort: number;
  category: {
    id: number;
    sort: number;
  };
  name: string;
  pages: string;
  updateDate: string;
}

export interface ITopicQuery {
  current: number;
  pageSize: number;
  categoryName: string
}