import { VoteDetail } from "./detail";

export default function VotePage({ params }: { params: { id: string } }) {
  const { id } = params;
  return <VoteDetail id={id} />;
}
