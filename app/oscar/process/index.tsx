"use client";

import { Vote } from "../Vote";
import { SubmissionProcess } from "../SubmissionProcess";
import { Judge } from "../Judge";

export const Process = () => {
  return (
    <section className="w-full bg-oscarBlack flex flex-col gap-8 items-center pt-4 md:pt-8">
      <SubmissionProcess />
      <Vote />
      <Judge />
    </section>
  );
};
