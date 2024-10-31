import { OnSiteVoteDetail } from "./detail";

export default function VotePage({
  params,
}: {
  params: { id: string; code: string };
}) {
  const { id, code } = params;
  return <OnSiteVoteDetail id={id} code={code} />;
}
