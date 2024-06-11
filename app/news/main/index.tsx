import { useContext } from "react";
import { LatestNews } from "./latest-news";
import { SubArticles } from "./sub-news";
import { TopicContext } from "../context";
import { TopicFilterList } from "./topic-filter-list";

export function Main() {
  const { activeTopic } = useContext(TopicContext)!;

  const shoudDisplayTopicFilter = activeTopic !== null;
  if (shoudDisplayTopicFilter) {
    return <TopicFilterList />;
  }
  return (
    <div>
      <LatestNews />
      <SubArticles />
    </div>
  );
}
