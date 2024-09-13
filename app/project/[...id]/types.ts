import { OrganizationEntity } from "@/app/square/types"

export enum EventsRoleValue {
  /** 项目/组织 */
  PROJECT = 2,
  /** 个人 */
  PERSONAL = 3
  }

export interface IParams {
  events: string
  projects: string
  roleType: EventsRoleValue.PERSONAL | EventsRoleValue.PROJECT
}

export interface EventsApproveEntity {
  diyform: any[]
  organization: OrganizationEntity
}