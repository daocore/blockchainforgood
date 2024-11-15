"use client";

import { useState } from "react";
import { OscarFAQ } from "./FAQ";
import { Partners } from "./Partners";
import { Sponsors } from "./Sponsors";
import { Navbar } from "./navbar";
import { Challenge } from "./challenge";
import { Process } from "./process";

export const OscarIntro = () => {
  const [showLeft, setShowLeft] = useState(true);
  return (
    <section className="w-full bg-oscarBlack flex flex-col gap-8 items-center pt-4 md:pt-8">
      <Navbar showLeft={showLeft} onSwitch={setShowLeft} />
      {showLeft ? <Challenge /> : <Process />}
      <Sponsors />
      <Partners />
      <OscarFAQ />
    </section>
  );
};
