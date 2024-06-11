"use client";
import { Hero } from "./Hero";
import { Partner } from "./Partner";
import { Intro } from "./Intro";
import { Journey } from "./Journey";
import { HowJoin } from "./HowJoin";
import { Contact } from "./Contact";
import { FAQ } from "./FAQ";
import { useEffect } from "react";
import { trackSensors } from "@/lib/sensors";

export default function Home() {
  useEffect(() => {
    trackSensors("$pageview", {});
  }, []);

  return (
    <main className="w-full">
      <Hero />
      <section className="flex-col justify-start items-center gap-8 xs:gap-12 md:gap-24 inline-flex w-full">
        <Partner />
        <Intro />
        <Journey />
        <HowJoin />
        <FAQ />
        <Contact />
      </section>
    </main>
  );
}
