"use client";

import { Loading } from "@/components/Loading";
import { useAPIGetProjectDetail } from "./api";
import { EventsRoleValue } from "./types";
import { Detail } from "./detail";

export default function ProjectDetail({
  params,
}: {
  params: { id: [string, string] };
}) {
  const [eventId, projectId] = params.id;
  const { data: projectDetail, isLoading } = useAPIGetProjectDetail({
    events: eventId,
    projects: projectId,
    roleType: EventsRoleValue.PROJECT,
  });

  if (isLoading) {
    return <Loading />;
  }
  return <Detail item={projectDetail} />;
}
