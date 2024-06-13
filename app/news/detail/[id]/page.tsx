"use client";
import { publishDate } from "@/lib";
import { useAPIGetNewsDetail } from "../../api";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { IMAGE_URL } from "@/constants";
import { useIsMobile } from "@/hooks";
import { NewsDetailSkeleton } from "../../skeleton";
import { NEWS_TYPE_NAME } from "../../constants";
import Link from "next/link";
import 'braft-editor/dist/output.css'

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

      <div className="w-full md:w-page mx-auto">
        <Link href={author.link} target="_blank" className="flex">
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
        </Link>
        <h1 className="text-text font-bold text-2xl my-3">{name}</h1>
        <div className="flex gap-2 mb-2">
          <span className="text-xs text-turqoise px-2 py-0.5 border-turqoise border">
            {NEWS_TYPE_NAME[type]?.toUpperCase()}
          </span>
        </div>
        <div
          className="content braft-output-content bg-white p-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
