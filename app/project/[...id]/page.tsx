"use client";

import { Loading } from "@/components/Loading";
import { useAPIGetProjectDetail } from "./api";
import { EventsRoleValue } from "./types";
import { Detail } from "./detail";
import { useSearchParams } from "next/navigation";

const JUDGE = "judge";

export default function ProjectDetail({
  params,
}: {
  params: { id: [string, string] };
}) {
  const [eventId, projectId] = params.id;
  const isJudge = useSearchParams().get(JUDGE) === "1";

  const { data: projectDetail, isLoading } = useAPIGetProjectDetail({
    events: eventId,
    projects: projectId,
    roleType: isJudge ? EventsRoleValue.JUDGE : EventsRoleValue.PROJECT,
  });

  if (isLoading) {
    return <Loading />;
  }
  return <Detail item={projectDetail} />;
}
