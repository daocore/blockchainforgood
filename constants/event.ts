import { IFRAME_LOCATION_HOST } from "./url";

export const ORGANIZATION_HASH_PATH = "#/form/project";
export const INDIVIDUAL_HASH_PATH = "#/form/individual";

const isZFLocalENV = IFRAME_LOCATION_HOST?.includes("localhost");

// 合作伙伴
export const PRODUCTION_PARTNER_EVENT_ID = "230ac677-083f-4240-8f61-6a3e0d504ffd";
export const DEV_PARTNER_EVENT_ID = isZFLocalENV ? "972ac263-0dd9-43cc-97d0-ea7fbe7477f5" : "090ba7c2-bc0f-4476-b58e-fe834118dd89";

// 孵化
export const PRODUCTION_INCUBATION_EVENT_ID = "79e37236-cdf8-41ef-9337-cfcb7a4e777e";
export const DEV_INCUBATION_EVENT_ID = isZFLocalENV ? "b20ff37a-c94c-4165-9352-fd9667fa5a45" : "9b8c579d-3c1b-4e51-809a-1c47f226e799";