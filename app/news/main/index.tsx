import { useContext } from "react";
import { LatestNews } from "./latest-news";
import { SubTypeNews } from "./sub-type-news";
import { TopicContext } from "../context";
import { TopicFilterNews } from "./topic-filter-news";

export function Main() {
  const { activeTopic } = useContext(TopicContext)!;

  const shoudDisplayTopicFilter = activeTopic !== null;
  if (shoudDisplayTopicFilter) {
    return <TopicFilterNews />;
  }
  return (
    <div>
      <LatestNews />
      <SubTypeNews />
    </div>
  );
}
