import { OrganizationEntity } from "@/app/square/types";

export interface IVote {
  id: string;
  name: string;
  category: IVoteCategory;
  maximum: number;
  stimestampms: string;
  etimestampms: string;
  projects: string;
  event: {
    id: string;
    name: string;
    cover: string;
    intro: string;
    location: string;
    online: 0 | 1;
    belonging: {
      name: string;
      logo: string;
    };
  };
  organizations: Array<OrganizationEntity>;
  isUsed?: boolean;
  isInvalid?: boolean;
  weight?: number;
}

export interface ICreateVote {
  id: string;
  email: string;
  verifyCode: string;
  candidates: string[];
  nickname: string;
  walletAddress: string;
  link: {
    telgram?: string;
    linkedin?: string;
  };
  token: string;
}

export interface IEmail {
  email: string;
}

export interface IVoteResultParams {
  id: string;
  projectName?: string;
}

export interface IVoteResult {
  id: string;
  project: OrganizationEntity;
  count: number;
  total: number;
  formId?: string;
  ranking: number;
  trend: number;
  eventId: string;
}

export enum VOTE_CATEGORY {
  SINGLE = 0,
  MULTIPLE = 1,
}

export type IVoteCategory = VOTE_CATEGORY.SINGLE | VOTE_CATEGORY.MULTIPLE;
