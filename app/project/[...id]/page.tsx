"use client";

import { Loading } from "@/components/Loading";
import { useAPIGetProjectDetail } from "./api";
import { EventsRoleValue } from "./types";
import { Detail } from "./detail";
import { useSearchParams } from "next/navigation";

const JUDGE = "judge";
const JUDGE_VALUE = "1";

export default function ProjectDetail({
  params,
}: {
  params: { id: [string, string] };
}) {
  const [eventId, projectId] = params.id;
  const isJudge = useSearchParams().get(JUDGE) === JUDGE_VALUE;

  const { data: projectDetail, isLoading } = useAPIGetProjectDetail({
    events: eventId,
    projects: projectId,
    roleType: EventsRoleValue.PROJECT,
    judge: isJudge ? JUDGE_VALUE : undefined,
  });

  if (isLoading) {
    return <Loading />;
  }
  return <Detail item={projectDetail} />;
}
