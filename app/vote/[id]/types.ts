import { OrganizationEntity } from "@/app/square/types";

export interface IVote {
  id: string;
  name: string;
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
