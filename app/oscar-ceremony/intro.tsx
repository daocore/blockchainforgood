import { Award } from "./award";
import { Chains } from "./chains";
import { FAQ } from "./faq";
import { Hash } from "./hash";
import { Partners } from "../oscar/Partners";
import { SubmissionProcess } from "./submission-process";

export function Intro() {
  return (
    <div className="bg-oscarBlack pt-4 md:pt-8">
      <div className="w-full md:w-content mx-auto space-y-8">
        <Hash />
        <Chains />
        <SubmissionProcess />
        <Award />
        <Partners />
        <FAQ />
      </div>
    </div>
  );
}
