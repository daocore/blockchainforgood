"use client";

import { useAPIGetBlogs } from "./api";
import type { IBlogsQuery } from "./types";
import { useUrlState } from "@/hooks/useUrlState";
import { Pagination } from "@/components/Pagination";
import { BlogItem } from "./item";

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
        <BlogItem key={item.id} item={item} />
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
