import { ARTICLE_TYPE, PLATFORM } from "./enums";

export const ARTICLE_TYPE_NAME = {
  [ARTICLE_TYPE.BYBIT_BGA]: 'Bybit x BGA',
  [ARTICLE_TYPE.RREAL_TALK_CASE_STUDY]: 'Real Talk Case Study',
  [ARTICLE_TYPE.BGA_WEEKLY_PROGRESS_PULSE]: 'BGA Weekly Progress Pulse',
};

export const ARTICLE_PLATFORM_NAME = {
  [PLATFORM.MOLEDAO]: 'MOLEDAO',
  [PLATFORM.BGA]: 'BGA',
};

export const PAGE_SIZE = 20;