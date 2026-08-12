"use client";

import { useEffect } from "react";
import { initDeferredPixels } from "@/lib/analytics/pixels";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initDeferredPixels();
  }, []);

  return <>{children}</>;
}
