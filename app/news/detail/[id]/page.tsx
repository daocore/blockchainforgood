"use client";
import { cn, publishDate } from "@/lib";
import { useAPIGetNewsDetail } from "../../api";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { IMAGE_URL } from "@/constants";
import { useIsMobile } from "@/hooks";
import { NewsDetailSkeleton } from "../../skeleton";
import { NEWS_TYPE_NAME } from "../../constants";
import Link from "next/link";

export default function Detail({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data, isLoading } = useAPIGetNewsDetail(id);

  const router = useRouter();
  const onBackToIndex = () => {
    router.back();
  };
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <div className="w-content mx-auto">
        <NewsDetailSkeleton />
      </div>
    );
  }
  const {
    name,
    content: { content, updateDate },
    author,
    type,
  } = data!;

  return (
    <div className="w-full md:w-content mx-auto">
      {isMobile && (
        <div className="mb-8 mt-4">
          <span
            className="text-xs inline-flex cursor-pointer"
            onClick={onBackToIndex}
          >
            <ChevronLeft size={16} />
            Back
          </span>
        </div>
      )}

      <div className={cn("w-full md:w-page mx-auto", !isMobile && "mt-12")}>
        <Link
          href={author.link}
          target="_blank"
          className="flex hover:text-main"
        >
          <img
            src={`${IMAGE_URL}${author.avatar}`}
            alt={author.name}
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-2 flex flex-col justify-between">
            <span className="font-bold text-black">{author.name}</span>
            <span className="text-description text-xs opacity-70">
              {publishDate(updateDate)}
            </span>
          </div>
        </Link>
        <h1 className="text-black font-bold text-3xl my-4 leading-snug">
          {name}
        </h1>
        <div className="flex gap-2 mb-8">
          <span className="text-xs text-turqoise px-2 py-0.5 border-turqoise border">
            {NEWS_TYPE_NAME[type]?.toUpperCase()}
          </span>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
