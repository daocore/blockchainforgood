"use client";

import { Evaluation } from "./Evaluation";
import { OscarFAQ } from "./FAQ";
import { Judge } from "./Judge";
import { Partners } from "./Partners";
import { Prizes } from "./Prize";
import { Sponsors } from "./Sponsors";
import { SubmissionProcess } from "./SubmissionProcess";
import { SummitInto } from "./SummitIntro";
import { Vote } from "./Vote";

export const OscarIntro = () => {
  return (
    <section className="w-full bg-oscarBlack flex flex-col gap-[32px] md:gap-[96px] items-center py-[32px] md:py-[96px]">
      <Vote />
      <SummitInto />
      <Prizes />
      <SubmissionProcess />
      <Judge />
      <Evaluation />
      <Sponsors />
      <Partners />
      <OscarFAQ />
    </section>
  );
};
