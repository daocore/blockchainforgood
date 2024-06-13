import { useAPIGetTopics } from "./api";
import { useContext, useState } from "react";
import { TopicContext } from "./context";
import { cn } from "@/lib";
import { TopicSkeleton } from "./skeleton";
import { Equal, X } from "lucide-react";

export default function Topics() {
  const { data: { list = [] } = {}, isLoading } = useAPIGetTopics();

  const { activeTopic, setActiveTopic } = useContext(TopicContext)!;

  const onTopicClick = (id: number) => {
    setActiveTopic((prev) => (prev === id ? null : id));
  };

  const [showMobileTopics, setShowMobileTopics] = useState(false);
  const onShowMobileTopics = () => {
    setShowMobileTopics(true);
  };
  const onHiddenMobileTopics = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation();
    setShowMobileTopics(false);
  };

  const onHiddenMobileTopicsWhenClickOutside = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      setShowMobileTopics(false);
    }
  };
  const onMobileTopicClick = (id: number) => {
    setActiveTopic((prev) => (prev === id ? null : id));
    setShowMobileTopics(false);
  };
  if (isLoading) {
    return <TopicSkeleton />;
  }

  return (
    <div className="my-2">
      {/* PC */}
      <div className="hidden md:flex flex-nowrap gap-2 overflow-x-auto snap-x">
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
      {/* Mobile */}
      {!showMobileTopics && (
        <Equal
          size={18}
          className="md:hidden cursor-pointer fixed z-50 top-3 right-2"
          onClick={onShowMobileTopics}
        />
      )}
      {showMobileTopics && (
        <div
          className="fixed z-50 top-0 left-0 w-screen h-screen bg-black/80"
          onClick={onHiddenMobileTopicsWhenClickOutside}
        >
          <div className="bg-white px-4 absolute top-0 left-0 w-full">
            <X
              size={16}
              className="cursor-pointer absolute top-4 right-4 md:relative md:top-0 md:right-0"
              onClick={onHiddenMobileTopics}
            />
            <h2 className="font-bold mt-10 mb-1">topic</h2>
            {list.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "w-full whitespace-nowrap truncate cursor-pointer py-1 text-xs rounded-full bg-white box-border border border-transparent",
                  {
                    "text-turqoise": activeTopic === item.id,
                  }
                )}
                onClick={() => onMobileTopicClick(item.id)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
