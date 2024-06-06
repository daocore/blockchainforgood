export interface IBlog {
  id: string;
  name: string;
  cover: string;
  updateDate: string;
  intro: string;
  approve: number
}

export interface IPageData<T> {
  total: number;
  list: T[];
}

export interface IBlogDetail extends IBlog {
  content: {
    id: number
    content: string
  }
  tags: string[]
}

export interface IBlogsQuery {
  current: number;
  pageSize: number;
  approve?: number;
}