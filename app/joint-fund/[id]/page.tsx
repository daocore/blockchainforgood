import { useParams } from "next/navigation";

export default function JointFundIdPage() {
  const { id } = useParams<{ id: string }>();
  return <div>Joint Fund Id: {id}</div>;
}
