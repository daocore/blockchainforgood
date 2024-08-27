"use client";

import { Evaluation } from "./Evaluation";
import { OscarFAQ } from "./FAQ";
import { Prizes } from "./Prize";
import { SubmissionProcess } from "./SubmissionProcess";
import { SummitInto } from "./SummitIntro";

export const OscarIntro = () => {

  return (
    <section className="w-full bg-oscorBlack flex flex-col gap-[96px] items-center py-[96px]">
      <SummitInto />
      <Prizes />
      <SubmissionProcess />
      <Evaluation />
      <OscarFAQ />
    </section>
  );
};
