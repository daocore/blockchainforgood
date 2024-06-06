"use client";
import { Analytics as AnalyticsImpl } from "@vercel/analytics/react";

export function Analytics() {
  const showAnalytics = window?.location?.href?.includes(
    "https://blockchainforgood.xyz/"
  );

  if (showAnalytics) {
    return <AnalyticsImpl />;
  }
  return null;
}
