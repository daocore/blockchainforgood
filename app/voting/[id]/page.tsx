"use client";

import { cn } from "@/lib";
import { Layout } from "../components/layout";
import { ProjectsTrends } from "../projects-trend";
import styles from "../styles.module.css";
import "../styles.css";
import { useEffect, useRef, useState } from "react";
import { ProjectDetail } from "../project-detail";
import { useAPIGetVoteResult } from "../../vote/[id]/[code]/api";
import { Loading } from "../skeleton-loading";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PROJECT_LIST } from "../consts";

const SECNODE = 1000;

const SHOW_TRENDS_TIME = 10 * SECNODE;
const SHOW_PROJECT_TIME = 30 * SECNODE;

const REFRESH_TIME = 30 * SECNODE;

const TRENDS_TITLE = "TOP 10 PROJECTS";
const PROJECT_TITLE = "PROJECTS INTRO";

export default function VotePage({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data = [], isLoading } = useAPIGetVoteResult({ id }, REFRESH_TIME);

  const [title, setTitle] = useState(TRENDS_TITLE);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTrends, setShowTrends] = useState(true);

  const showTrensRef = useRef<boolean>(showTrends);

  const projectTrendTimeoutIdRef = useRef<NodeJS.Timeout>();
  const projectDetailTimeoutIdRef = useRef<NodeJS.Timeout>();

  const showProjectTrend = () =>
    new Promise((resolve, reject) => {
      projectTrendTimeoutIdRef.current = setTimeout(() => {
        resolve(1);
      }, SHOW_PROJECT_TIME);
    }).then(() => {
      setShowTrends(true);
      setTitle(TRENDS_TITLE);
      showTrensRef.current = true;
    });

  const showProjectDetail = () =>
    new Promise((resolve, reject) => {
      projectDetailTimeoutIdRef.current = setTimeout(() => {
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

  const onCancelShowProject = () => {
    clearTimeout(projectDetailTimeoutIdRef.current);

    setShowTrends(true);
    setTitle(TRENDS_TITLE);
    showTrensRef.current = true;

    toggleComponent();
  };

  if (isLoading && data.length === 0) return <Loading />;
  return (
    <Layout dataSource={data} title={title}>
      <div className="w-full max-w-[calc(100vw-10rem-600px)]">
        <div className={cn("w-full relative p-4", styles["right-wrapper"])}>
          <div
            className={cn(
              styles["right-wrapper-bg"],
              "absolute inset-0 opacity-20 -z-10"
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
                  <ProjectsTrends dataSource={data} />
                ) : (
                  <ProjectDetail
                    project={PROJECT_LIST[currentIndex]}
                    onBack={onCancelShowProject}
                  />
                )}
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <div className="flex gap-2 mt-2 overflow-x-auto cursor-pointer">
          {PROJECT_LIST.map((item, index) => (
            <div
              className={cn(
                index === currentIndex && styles["tab-active-wrapper"]
              )}
            >
              <div
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "text-darkGray text-xl py-2 px-4 whitespace-nowrap",
                  index === currentIndex && styles["tab-active"]
                )}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
