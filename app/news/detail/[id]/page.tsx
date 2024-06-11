"use client";
import { publishDate } from "@/lib";
import { useAPIGetNewsDetail } from "../../api";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { IMAGE_URL } from "@/constants";
import { useIsMobile } from "@/hooks";
import { NewsDetailSkeleton } from "../../skeleton";

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
    tags,
  } = data!;

  return (
    <div className="w-content mx-auto">
      {isMobile && (
        <div>
          <span
            className="text-xs inline-flex cursor-pointer"
            onClick={onBackToIndex}
          >
            <ChevronLeft size={16} />
            Back
          </span>
        </div>
      )}

      <div className="w-page mx-auto">
        <div className="flex">
          <img
            src={`${IMAGE_URL}${author.avatar}`}
            alt={author.name}
            className="w-11 h-11 rounded-full"
          />
          <div className="ml-2 flex flex-col justify-between">
            <span className="font-bold">{author.name}</span>
            <span className="text-text text-xs opacity-70">
              {publishDate(updateDate)}
            </span>
          </div>
        </div>
        <h1 className="text-text font-bold text-2xl my-3">{name}</h1>
        <div className="flex gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="text-xs text-turqoise px-2 py-0.5 border-turqoise border"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
