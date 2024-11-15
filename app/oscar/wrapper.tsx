"use client";

import { OscarIntro } from "./OscarIntro";
import { OscarCeremony } from "../oscar-ceremony";
import { Hero } from "./hero";
import { useState } from "react";
import { KeyData } from "./key-data";

export function OscarWrapper() {
  const [showCeremony, setShowCeremony] = useState(false);
  return (
    <div>
      <Hero onChange={setShowCeremony} />
      <KeyData />
      {showCeremony && <OscarCeremony />}
      {!showCeremony && <OscarIntro />}
    </div>
  );
}
