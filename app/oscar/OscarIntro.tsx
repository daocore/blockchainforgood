"use client";

import { Evaluation } from "./Evaluation";
import { OscarFAQ } from "./FAQ";
import { Partners } from "./Partners";
import { Prizes } from "./Prize";
import { SubmissionProcess } from "./SubmissionProcess";
import { SummitInto } from "./SummitIntro";

export const OscarIntro = () => {

  return (
    <section className="w-full bg-oscorBlack flex flex-col gap-[32px] md:gap-[96px] items-center py-[32px] md:py-[96px]">
      <SummitInto />
      <Prizes />
      <SubmissionProcess />
      <Evaluation />
      <Partners />
      <OscarFAQ />
    </section>
  );
};
