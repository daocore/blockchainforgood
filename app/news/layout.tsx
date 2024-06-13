"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";
import { ROUTER_PATH } from "@/constants";
import { cn } from "@/lib";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isNewsDetail = pathname.startsWith(ROUTER_PATH.NEWS.DETAIL);
  return (
    <div className="w-full mx-auto">
      <Header />
      <main className={cn("p-4 pb-8 md:pb-16", isNewsDetail && "bg-white")}>
        {children}
      </main>
    </div>
  );
}
