"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactElement } from "react";

export function RouterProcess({ children }: { children: ReactElement }) {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#00d5bf"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
