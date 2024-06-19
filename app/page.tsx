"use client";
import { Hero } from "./home/Hero";
import { Partner } from "./home/Partner";
import { Intro } from "./home/Intro";
import { Journey } from "./home/Journey";
import { HowJoin } from "./home/HowJoin";
import { Contact } from "./home/Contact";
import { FAQ } from "./home/FAQ";
import { useEffect } from "react";
import { initSensors, trackSensors } from "@/lib/sensors";

export default function Home() {
  useEffect(() => {
    initSensors();
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
