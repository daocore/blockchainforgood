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