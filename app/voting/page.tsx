"use client";

import { cn } from "@/lib";
import { Layout } from "./components/layout";
import { ProjectsTrends } from "./projects-trend";
import styles from "./styles.module.css";
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { ProjectDetail } from "./project-detail";
import { useAPIGetVoteResult } from "../vote/[id]/api";
import { OSCAR_VOTE_ID } from "@/constants";
import { Loading } from "./skeleton-loading";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const SECNODE = 1000;

const SHOW_TRENDS_TIME = 10 * SECNODE;
const SHOW_PROJECT_TIME = 30 * SECNODE;

const REFRESH_TIME = 30 * SECNODE;

const TRENDS_TITLE = "TOP 10 PROJECTS";
const PROJECT_TITLE = "PROJECTS INTRO";

export default function VotePage() {
  const { data = [], isLoading } = useAPIGetVoteResult(
    { id: OSCAR_VOTE_ID },
    REFRESH_TIME
  );

  const topTenData = data.slice(0, 10);

  const [title, setTitle] = useState(TRENDS_TITLE);

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
      setTitle(TRENDS_TITLE);
      showTrensRef.current = true;
    });

  const showProjectDetail = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1);
      }, SHOW_TRENDS_TIME);
    }).then(() => {
      setShowTrends(false);
      setTitle(PROJECT_TITLE);
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
      title={title}
      onProjectSelected={setCurrentIndex}
    >
      <div className={cn("w-full relative p-4", styles["right-wrapper"])}>
        <div
          className={cn(
            styles["right-wrapper-bg"],
            "absolute inset-0 opacity-20"
          )}
        />
        <div className={cn(styles["voting-transition-wrap"], "h-full")}>
          <TransitionGroup>
            <CSSTransition
              key={showTrends ? "A" : "B"}
              timeout={500}
              classNames="voting-fade"
              className="h-full"
            >
              {showTrends ? (
                <ProjectsTrends dataSource={topTenData} />
              ) : (
                <ProjectDetail item={topTenData[currentIndex]} />
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </Layout>
  );
}
