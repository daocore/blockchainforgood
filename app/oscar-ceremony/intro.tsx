"use client";

import { Award } from "./award";
import { Chains } from "./chains";
import { FAQ } from "./faq";
import { Hash } from "./hash";
import { Partners } from "../oscar/Partners";
import { SubmissionProcess } from "./submission-process";
import { Sponsors } from "../oscar/Sponsors";
import { useEffect } from "react";
import styles from "./index.module.css";

export function Intro() {
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
    <div className="bg-oscarBlack pt-4 md:pt-8 w-full mx-auto space-y-8">
      <Hash />
      <Chains />
      <SubmissionProcess />
      <Award />
      <Sponsors />
      <Partners />
      <FAQ />
    </div>
  );
}
