"use client";
import {
  Pagination as Root,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface IPaginationProps {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
}

const FIRST_CURRENT = 1;
const getNumberPages = (totalPage: number) => {
  const pages = [];
  for (let i = 1; i <= totalPage; i++) {
    pages.push(i);
  }
  return pages;
};

export function Pagination({
  current,
  pageSize,
  total,
  onChange,
}: IPaginationProps) {
  if (total === 0) return null;

  const [currentPage, setCurrentPage] = useState<number>(current);
  const totalPage = Math.ceil(total / pageSize);

  const onPagination = (page: number) => {
    setCurrentPage(page);
    onChange(page);
  };

  const onPrevious = () => {
    if (currentPage === FIRST_CURRENT) {
      return;
    }
    onPagination(currentPage - 1);
  };

  const onNext = () => {
    if (currentPage === totalPage) {
      return;
    }
    onPagination(currentPage + 1);
  };

  const pages = getNumberPages(totalPage);

  return (
    <Root>
      <PaginationContent>
        {currentPage !== FIRST_CURRENT && (
          <PaginationItem>
            <PaginationPrevious onClick={onPrevious} />
          </PaginationItem>
        )}
        {/* TODO: Implement the pagination ellipsis logic */}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPagination(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage !== totalPage && (
          <PaginationItem>
            <PaginationNext onClick={onNext} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Root>
  );
}
