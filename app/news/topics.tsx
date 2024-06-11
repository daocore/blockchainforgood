import { Spin } from "@/components/Spin";
import { useAPIGetTopics } from "./api";
import { useContext } from "react";
import { TopicContext } from "./context";
import { cn } from "@/lib";

export default function Topics() {
  const { data: { list = [], total = 0 } = {}, isLoading } = useAPIGetTopics();

  const { activeTopic, setActiveTopic } = useContext(TopicContext)!;

  const onTopicClick = (id: number) => {
    setActiveTopic((prev) => (prev === id ? null : id));
  };
  if (isLoading) {
    return <Spin />;
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
