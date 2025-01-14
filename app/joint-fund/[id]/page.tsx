"use client";

import { useParams } from "next/navigation";
import { getItemById } from "../data";
import { Hero } from "./hero";
import { Partners } from "./partners";
import { KeyObjective } from "./key-objective";
import { Responsibility } from "./responsibility";
import { Outcome } from "./outcome";
import { NextStep } from "./next-step";
import { Faq } from "./faq";
import { Toc } from "./toc";
import { Scope } from "./scope";

export default function JointFundIdPage() {
  const { id } = useParams<{ id: string }>();
  const item = getItemById(id);
  return (
    <div className="bg-incubation w-full text-white">
      <Hero />
      <Partners />
      <div className="relative w-full max-w-desktop mx-auto flex flex-col md:flex-row gap-4 md:gap-10">
        <Toc />
        <div className="space-y-4 md:space-y-10">
          <KeyObjective />
          <Scope />
          <Responsibility />
          <Outcome />
          <NextStep />
          <Faq />
        </div>
      </div>
    </div>
  );
}
