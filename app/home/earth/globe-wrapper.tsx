"use client";

import React from "react";
import Globe, { GlobeMethods, GlobeProps } from "react-globe.gl";

// Next.js 无法在dynamic中使用ref
const GlobeWrapper = ({
  globeRef,
  ...props
}: GlobeProps & { globeRef: React.RefObject<GlobeMethods> }) => {
  return <Globe ref={globeRef} {...props} />;
};

export default GlobeWrapper;
