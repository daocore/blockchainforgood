import { useAPIGetTopics } from "./api";
import { useContext } from "react";
import { TopicContext } from "./context";
import { cn } from "@/lib";
import { TopicSkeleton } from "./skeleton";

export default function Topics() {
  const { data: { list = [] } = {}, isLoading } = useAPIGetTopics();

  const { activeTopic, setActiveTopic } = useContext(TopicContext)!;

  const onTopicClick = (id: number) => {
    setActiveTopic((prev) => (prev === id ? null : id));
  };
  if (isLoading) {
    return <TopicSkeleton />;
  }

  return (
    <div className="my-2">
      <div className="flex flex-nowrap gap-3 overflow-x-auto snap-x">
        {list.map((item) => (
          <div
            key={item.id}
            className={cn(
              "w-max whitespace-nowrap px-2 cursor-pointer py-1 text-xs rounded-full bg-white box-border border border-transparent",
              {
                "border-black": activeTopic === item.id,
              }
            )}
            onClick={() => onTopicClick(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
