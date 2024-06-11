import { Dispatch, SetStateAction, createContext } from "react";

export const TopicContext = createContext<{
  activeTopic: number | null;
  setActiveTopic:  Dispatch<SetStateAction<number | null>>
} | null>(null);