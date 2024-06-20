"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function GoogleTag(): React.ReactNode {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());

    gtag("config", "G-5197XPR1BB");
  }, []);
  return null;
}
