"use client";
import { Hero } from "./home/Hero";
import { Contact } from "./home/Contact";
import { FAQ } from "./home/FAQ";
import { useEffect } from "react";
import { initSensors, trackSensors } from "@/lib/sensors";
import { What } from "./home/what";
import { How } from "./home/how";
import { Videos } from "./home/Video";

export default function Home() {
  useEffect(() => {
    initSensors();
    trackSensors("$pageview", {});
  }, []);

  return (
    <main className="w-full">
      <Hero />
      <section className="flex-col justify-start items-center gap-16 md:gap-24 inline-flex w-full">
        <Videos />
        <What />
        <div className="w-full h-0 border-b border-description" />
        <How />
        <FAQ />
        <Contact />
      </section>
    </main>
  );
}
