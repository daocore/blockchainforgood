"use client";

import { Input } from "@/components/Input";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export function Search() {
  const [isSearching, setIsSearching] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const onStartSearch = () => {
    setIsSearching(true);
  };

  const onCloseSearch = () => {
    setIsSearching(false);
    searchRef.current!.value = "";
  };

  const router = useRouter();
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchValue = (e.target as HTMLInputElement).value;
      if (searchValue === "") return;
      router.push(`/news/search?q=${searchValue}`);
      onCloseSearch();
    }
  };

  const onStopCloseSearch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onCloseSearchWhenClickOutside = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onCloseSearch();
    }
  };

  if (isSearching) {
    return (
      <div
        className="absolute top-10 left-0 w-screen h-screen bg-black/80"
        onClick={onCloseSearchWhenClickOutside}
      >
        <div className="bg-white" onClick={onStopCloseSearch}>
          <div className="w-content mx-auto flex items-center pt-4 pb-6">
            <SearchIcon size={16} />
            <Input
              className="border-none focus-visible:ring-0"
              ref={searchRef}
              placeholder="Search"
              autoFocus
              onKeyDown={onEnter}
            />
            <X size={16} className="cursor-pointer" onClick={onCloseSearch} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <SearchIcon onClick={onStartSearch} className="cursor-pointer" size={18} />
  );
}
