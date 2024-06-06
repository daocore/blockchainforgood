"use client";
import { Analytics as AnalyticsImpl } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

export function Analytics() {
  const [showAnalytics, setShowAnalytics] = useState(false);

  useEffect(() => {
    setShowAnalytics(
      window?.location?.href?.includes("https://blockchainforgood.xyz/")
    );
  }, []);

  if (showAnalytics) {
    return <AnalyticsImpl />;
  }
  return null;
}
