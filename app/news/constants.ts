import { NEWS_TYPE, PLATFORM } from "./enums";

export const NEWS_TYPE_NAME = {
  [NEWS_TYPE.BYBIT_BGA]: 'Bybit x BGA',
  [NEWS_TYPE.RREAL_TALK_CASE_STUDY]: 'Real Talk Case Study',
  [NEWS_TYPE.BGA_WEEKLY_PROGRESS_PULSE]: 'BGA Weekly Progress Pulse',
};

export const NEWS_PLATFORM_NAME = {
  [PLATFORM.MOLEDAO]: 'MOLEDAO',
  [PLATFORM.BGA]: 'BGA',
};

export const PAGE_SIZE = 20;