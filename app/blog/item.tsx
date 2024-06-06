"use client";

import { postDate } from "@/lib";
import type { IBlog } from "./types";
import { IMAGE_URL, ROUTER_PATH } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function BlogItem({ item }: { item: IBlog }) {
  const { name, id, cover, intro, updateDate } = item;

  const router = useRouter();
  const onIntoDetail = () => {
    router.push(`${ROUTER_PATH.BLOG.ROOT}/${id}`);
  };

  return (
    <div className="flex" onClick={onIntoDetail}>
      <img
        loading="lazy"
        className="object-cover w-48 h-36 mr-4"
        src={`${IMAGE_URL}${cover}`}
        alt={name}
      />
      <div>
        <h2 className="text-xl font-semibold text-text cursor-pointer">
          {name}
        </h2>
        <div className="my-2">
          <span className="text-text opacity-80 text-sm ">
            Published {postDate(updateDate)}
          </span>
        </div>
        <p className="text-text opacity-80 text-sm">{intro}</p>
        <Link
          href={`/blog/${id}`}
          className="font-medium text-primary hover:underline hover:underline-offset-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
