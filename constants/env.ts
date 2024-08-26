export enum ENetwork {
    PRODUCTION = "production",
    STAGING = "staging",
    DEVELOPMENT = "development",
    ZFDEV = "zfdev",
}

export const BGA_ENV = (process.env.NEXT_PUBLIC_BGA_ENV || ENetwork.PRODUCTION) as ENetwork;

export const BASE_URL = {
    [ENetwork.PRODUCTION]: "https://a.moledao.io",
    [ENetwork.DEVELOPMENT]: "https://beta.moledao.io",
    [ENetwork.STAGING]: "https://beta.moledao.io",
    [ENetwork.ZFDEV]: "http://localhost:8080",
}[BGA_ENV];

// 资源的base url
export const ASSETS_URL = {
    [ENetwork.PRODUCTION]: "https://a.moledao.io/assets",
    [ENetwork.DEVELOPMENT]: "https://beta.moledao.io/assets",
    [ENetwork.STAGING]: "https://beta.moledao.io/assets",
    [ENetwork.ZFDEV]: "http://localhost:8080/static",
}[BGA_ENV];

// 表单的iframe页面url
export const MOLEDAO_IFRAME_URL = {
    [ENetwork.PRODUCTION]: "https://www.moledao.io",
    [ENetwork.DEVELOPMENT]: "https://beta.moledao.io",
    [ENetwork.STAGING]: "https://beta.moledao.io",
    [ENetwork.ZFDEV]: "http://localhost:5173",
}[BGA_ENV];

// 顾问的title的itemkey
export const ADVISOR_TITLE_ITEMKEY = {
    [ENetwork.PRODUCTION]: "itemkey1363983",
    [ENetwork.DEVELOPMENT]: "itemkey759639",
    [ENetwork.STAGING]: "itemkey759639",
    [ENetwork.ZFDEV]: "itemkey7596123",
}[BGA_ENV];

// 合作伙伴事件
export const PARTNER_EVENT_ID = {
    [ENetwork.PRODUCTION]: "230ac677-083f-4240-8f61-6a3e0d504ffd",
    [ENetwork.DEVELOPMENT]: "090ba7c2-bc0f-4476-b58e-fe834118dd89",
    [ENetwork.STAGING]: "090ba7c2-bc0f-4476-b58e-fe834118dd89",
    [ENetwork.ZFDEV]: "090ba7c2-bc0f-4476-b58e-fe834118dd89",
}[BGA_ENV];

// 孵化活动
export const INCUBATION_EVENT_ID = {
    [ENetwork.PRODUCTION]: "79e37236-cdf8-41ef-9337-cfcb7a4e777e",
    [ENetwork.DEVELOPMENT]: "9b8c579d-3c1b-4e51-809a-1c47f226e799",
    [ENetwork.STAGING]: "9b8c579d-3c1b-4e51-809a-1c47f226e799",
    [ENetwork.ZFDEV]: "9b8c579d-3c1b-4e51-809a-1c47f226e799",
}[BGA_ENV];

// 奥斯卡活动ID
export const OSCAR_EVENT_ID = {
    [ENetwork.PRODUCTION]: "bd238aa5-9005-4165-bdcb-8e88e6ef9be0",
    [ENetwork.DEVELOPMENT]: "081f1851-89ce-44d0-a806-695f1f503a10",
    [ENetwork.STAGING]: "081f1851-89ce-44d0-a806-695f1f503a10",
    [ENetwork.ZFDEV]: "9b8c579d-3c1b-4e51-809a-1c47f226e799",
}[BGA_ENV];