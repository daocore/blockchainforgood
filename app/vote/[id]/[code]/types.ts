import { IVoteResult } from "../types";
import { IExtraProjectInfo } from "@/app/voting/types";

export interface ICreateOnSiteVote {
  id: string;
  code: string;
  candidates: string[];
  token: string;
}

export type IVotingResult = Omit<IVoteResult, "project"> & {
  project: Omit<IVoteResult["project"], "logo"> & IExtraProjectInfo;
};
