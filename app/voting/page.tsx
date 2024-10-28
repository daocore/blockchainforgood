"use client";

import { cn } from "@/lib";
import { Layout } from "./components/layout";
import { ProjectsTrends } from "./projects-trend";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { ProjectDetail } from "./project-detail";
import { useAPIGetVoteResult } from "../vote/[id]/api";
import { OSCAR_VOTE_ID } from "@/constants";
import { Loading } from "./skeleton-loading";

const SECNODE = 1000;

const SHOW_TRENDS_TIME = 10 * SECNODE;
const SHOW_PROJECT_TIME = 30 * SECNODE;

const REFRESH_TIME = 30 * SECNODE;

export default function VotePage() {
  const { data = [], isLoading } = useAPIGetVoteResult(
    { id: OSCAR_VOTE_ID },
    REFRESH_TIME
  );

  const topTenData = data.slice(0, 10);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTrends, setShowTrends] = useState(true);

  const showTrensRef = useRef<boolean>(showTrends);

  const showProjectTrend = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, SHOW_PROJECT_TIME);
    }).then(() => {
      setShowTrends(true);
      showTrensRef.current = true;
    });

  const showProjectDetail = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, SHOW_TRENDS_TIME);
    }).then(() => {
      setShowTrends(false);
      showTrensRef.current = false;
    });

  const toggleComponent = (): Promise<any> => {
    let promise;
    if (showTrensRef.current) {
      promise = showProjectDetail();
    } else {
      promise = showProjectTrend();
    }
    return promise.then(() => toggleComponent());
  };

  useEffect(() => {
    toggleComponent();
  }, []);

  if (isLoading && topTenData.length === 0) return <Loading />;
  return (
    <Layout
      dataSource={topTenData}
      title="TOP 10 PROJECTS"
      onProjectSelected={setCurrentIndex}
    >
      <div className={cn("w-full relative p-4", styles["right-wrapper"])}>
        <div
          className={cn(
            styles["right-wrapper-bg"],
            "absolute inset-0 opacity-20"
          )}
        />
        {showTrends ? (
          <ProjectsTrends dataSource={topTenData} />
        ) : (
          <ProjectDetail item={topTenData[currentIndex]} />
        )}
      </div>
    </Layout>
  );
}
