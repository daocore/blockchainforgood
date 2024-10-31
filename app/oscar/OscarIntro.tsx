"use client";

import { useEffect } from "react";
import { Evaluation } from "./Evaluation";
import { OscarFAQ } from "./FAQ";
import { Hash } from "./Hash";
import { Judge } from "./Judge";
import { Partners } from "./Partners";
import { Prizes } from "./Prize";
import { Sponsors } from "./Sponsors";
import { SubmissionProcess } from "./SubmissionProcess";
import { SummitInto } from "./SummitIntro";
import { Vote } from "./Vote";
import styles from "../oscar-ceremony/index.module.css";

export const OscarIntro = () => {
  useEffect(() => {
    // 获取所有的section和导航链接
    const sections = document.querySelectorAll(".hash-section");
    const navLinks = document.querySelectorAll("#navbar a");

    // 创建 Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const navLink = document.querySelector(
            `#navbar a[href="#${sectionId}"]`
          );

          if (entry.isIntersecting) {
            // 进入视窗时添加 active 类
            navLinks.forEach((link) =>
              link.classList.remove(styles["hash-active"])
            );
            navLink.classList.add(styles["hash-active"]);
          }
        });
      },
      {
        root: null, // 使用视窗作为根
        threshold: 0.5, // 50% 以上部分进入视窗时触发
      }
    );

    // 监听每个 section
    sections.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  return (
    <section className="w-full bg-oscarBlack flex flex-col gap-8 items-center pt-4 md:pt-8">
      <Hash />
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
