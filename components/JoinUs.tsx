"use client";
import { cn } from "@/lib";
import { useRouter } from "next-nprogress-bar";

export const JoinUs = ({
  text,
  link,
  className,
}: {
  text?: string;
  link: string;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "w-full xs:w-[240px] z-10 md:w-auto xs:mx-auto md:mx-0 px-6 py-2 text-white text-[14px] justify-center transform items-center inline-flex button cursor-pointer font-['Inter'] font-bold",
        className
      )}
      onClick={() => {
        router.push(link);
      }}
    >
      {text || "Join Us"}
    </div>
  );
};
