"use client";

import Link from "next/link";
import { Today } from "./date";
import { Search } from "./search";
import { ROUTER_PATH } from "@/constants";

export function Header() {
  return (
    <header className="bg-white relative">
      <div className="flex justify-between items-center w-content mx-auto py-2 h-10">
        <h2 className="font-bold text-xl">
          <Link href={ROUTER_PATH.NEWS.ROOT}>BGA NEWS</Link>
        </h2>
        <Search />
      </div>
      <Today />
    </header>
  );
}
