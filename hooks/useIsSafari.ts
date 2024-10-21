"use client";

import { useLayoutEffect, useState } from "react";

export function useIsSafari(): boolean {
  const [isSafari, setIsSafari] = useState<boolean>(false);

  function getIsSafari(): boolean {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  useLayoutEffect(() => {
    setIsSafari(getIsSafari());
  }, []);

  return isSafari;
}
