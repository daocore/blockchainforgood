"use client";

import { useMemo, useState } from "react";
import { TopicContext } from "./context";
import Topics from "./topics";
import { Main } from "./main";

export default function News() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const contextValue = useMemo(
    () => ({
      activeTopic,
      setActiveTopic,
    }),
    [activeTopic, setActiveTopic]
  );
  return (
    <div className="w-full md:w-content mx-auto">
      <TopicContext.Provider value={contextValue}>
        <Topics />
        <Main />
      </TopicContext.Provider>
    </div>
  );
}
