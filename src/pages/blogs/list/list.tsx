import { postDate } from "@/libs";
import { useAPIGetBlogs } from "../api";
import { IBlog, IBlogsQuery } from "../types";
import { Link, useNavigate } from "react-router-dom";
import { useUrlState } from "@/hooks";
import { Pagination } from "@/components";
import { IMAGE_URL } from "@/constants";

export function BlogListImpl() {
  const [querys, setQuerys] = useUrlState<IBlogsQuery>({
    current: 1,
    pageSize: 10,
  });

  const { data: { list = [], total = 0 } = {} } = useAPIGetBlogs(
    querys as IBlogsQuery
  );

  const handlePageChange = (page: number) => {
    setQuerys({ ...querys, current: page });
  };
  return (
    <div className="md:w-content flex flex-col gap-6">
      {list.map((item) => (
        <BlogItem item={item} />
      ))}
      <Pagination
        current={querys.current}
        pageSize={querys.pageSize}
        total={total}
        onChange={handlePageChange}
      />
    </div>
  );
}

function BlogItem({ item }: { item: IBlog }) {
  const { name, id, cover, intro, updateDate } = item;

  const navigate = useNavigate();
  const onIntoDetail = () => {
    navigate(`/blog/${id}`);
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
        <h2 className="text-xl font-semibold text-text">{name}</h2>
        <div className="my-2">
          <span className="text-text opacity-80 text-sm ">
            Published {postDate(updateDate)}
          </span>
        </div>
        <p className="text-text opacity-80 text-sm">{intro}</p>
        <Link
          to={`/blog/${id}`}
          className="font-medium text-primary hover:underline hover:underline-offset-2"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
