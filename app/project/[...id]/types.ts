import { OrganizationEntity } from "@/app/square/types";

export enum EventsRoleValue {
  /** 项目/组织 */
  PROJECT = 2,
  /** 个人 */
  PERSONAL = 3,
  JUDGE = 4,
}

export interface IParams {
  events: string;
  projects: string;
  roleType:
    | EventsRoleValue.PERSONAL
    | EventsRoleValue.PROJECT
    | EventsRoleValue.JUDGE;
}

export interface EventsApproveEntity {
  diyform: any[];
  organization: OrganizationEntity;
}
