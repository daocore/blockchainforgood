"use client";

import { INITIAL_QUERY, useAPIGetBlogs } from "./api";
import type { IBlogsQuery } from "./types";
import { useUrlState } from "@/hooks/useUrlState";
import { Pagination } from "@/components/Pagination";
import { BlogItem } from "./item";
import { Spin } from "@/components/Spin";

export function BlogListImpl() {
  const [querys, setQuerys] = useUrlState<IBlogsQuery>(INITIAL_QUERY);

  const { data: { list = [], total = 0 } = {}, isLoading } = useAPIGetBlogs(
    querys as IBlogsQuery
  );

  const handlePageChange = (page: number) => {
    setQuerys({ ...querys, current: page });
  };

  if (isLoading) {
    return <Spin />;
  }
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
