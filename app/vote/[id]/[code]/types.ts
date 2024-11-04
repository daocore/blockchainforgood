export interface ICreateOnSiteVote {
  id: string;
  email: string;
  code: string;
  candidates: string[];
  nickname: string;
  walletAddress: string;
  link: {
    telgram?: string;
    linkedin?: string;
  };
  token: string;
}
