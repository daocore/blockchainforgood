import { useParams } from "react-router-dom";
import { IBlogDetail } from "../types";
import { useAPIGetBlogDetail } from "../api";
import { postDate } from "@/libs";

export function BlogDetailImpl() {
  const { id } = useParams<"id">();
  const { data = {} as IBlogDetail } = useAPIGetBlogDetail(id!);

  const { name, content, updateDate } = data;
  return (
    <div className="md:w-content">
      <h1 className="text-text font-bold text-2xl my-3">{name}</h1>
      <div className="">
        <span className="text-text text-sm opacity-70">
          Published Date: {postDate(updateDate)}
        </span>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: content?.content }}
      ></div>
    </div>
  );
}
