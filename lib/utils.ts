import { PRODUCTION_MOLEDAO_DOMAIN, PRODUCTION_VERCEL_DOMAIN } from "@/constants";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function queryStrings(query: Record<string, any>) {
    const quertString = Object.keys(query)
        .map((key) => key + "=" + query[key])
        .join("&");
        return quertString;
}

export function IsProductionClient() {
    return [PRODUCTION_MOLEDAO_DOMAIN, PRODUCTION_VERCEL_DOMAIN]?.includes(window?.location?.host);
}

export function IsProductionServer() {
  return process.env.NEXT_PUBLIC_IS_PRODUCTION !== 'false'
}