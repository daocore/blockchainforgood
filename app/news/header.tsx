"use client";

import Link from "next/link";
import { Today } from "./date";
import { Search } from "./search";
import { ROUTER_PATH } from "@/constants";

export function Header() {
  return (
    <header className="bg-white relative">
      <div className="flex justify-between items-center w-full md:w-content mx-auto py-4 h-14">
        <h2 className="w-full font-bold text-3xl text-center md:text-left">
          <Link href={ROUTER_PATH.NEWS.ROOT}>BGA NEWS</Link>
        </h2>
        <Search />
      </div>
      <Today />
    </header>
  );
}
