"use client";
import { useDeferredValue, useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import styles from "./index.module.css";
import { cn } from "@/lib";

dayjs.extend(duration);

interface CountDownProps {
  endTime: number; // end time in timestamp format
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export function CountDown({ endTime }: CountDownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const end = dayjs(endTime);
      const diff = end.diff(now);

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        const duration = dayjs.duration(diff);
        setTimeLeft({
          days: duration.days(),
          hours: duration.hours(),
          minutes: duration.minutes(),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const isTimeOver =
    timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0;

  return (
    <div
      className={cn("text-description px-4 py-1", styles["count-down-wrapper"])}
    >
      {isTimeOver && <TimeOver />}
      {!isTimeOver && <CountDownImpl {...timeLeft} />}
    </div>
  );
}

function TimeOver() {
  return <p className="h-10 leading-[2.5rem]">Voting is closed!</p>;
}

function CountDownImpl({ days, hours, minutes }: TimeLeft) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <CountDownImplItem label="DAYS" value={days} />
      <CountDownImplItem label="HOURS" value={hours} />
      <CountDownImplItem label="MINUTES" value={minutes} />
    </div>
  );
}

function CountDownImplItem({ label, value }: { label: string; value: number }) {
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setPrevValue(value);
    }, 600);
  }, [value]);
  return (
    <div className="text-center">
      <div className="relative w-full h-6 overflow-hidden">
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full text-center opacity-0",
            value !== prevValue && styles["count-down"]
          )}
        >
          <div className="font-bold text-2xl text-white/60">{prevValue}</div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full text-center">
          <div className="font-bold text-xl text-white/60">{value}</div>
        </div>
      </div>
      <div className="text-xs">{label}</div>
    </div>
  );
}
