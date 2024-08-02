import { NEWS_TYPE, PLATFORM } from "./enums";

export const NEWS_TYPE_NAME = {
  [NEWS_TYPE.BYBIT_BGA]: 'Bybit x BGA',
  [NEWS_TYPE.RREAL_TALK_CASE_STUDY]: 'Real Talk Case Study',
  [NEWS_TYPE.BGA_PROGRESS_PULSE]: 'BGA Progress Pulse',
  [NEWS_TYPE.BFG_BGA]: 'BFG x BGA',
  [NEWS_TYPE.KLIMADAO_BGA]: 'Klimadao X BGA',
};

export const NEWS_PLATFORM_NAME = {
  [PLATFORM.MOLEDAO]: 'MOLEDAO',
  [PLATFORM.BGA]: 'BGA',
};

export const PAGE_SIZE = 20;