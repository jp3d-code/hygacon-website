"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";
import { cn } from "@/shared/lib/utils";

type PaginationEntry = number | "ellipsis";

const paginationRange = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const getPaginationEntries = (
  totalPages: number,
  currentPage: number,
  siblingCount: number,
): PaginationEntry[] => {
  if (totalPages <= 0) {
    return [];
  }

  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) {
    return paginationRange(1, totalPages);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftEllipsis = leftSiblingIndex > 2;
  const showRightEllipsis = rightSiblingIndex < totalPages - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftItemCount = 3 + siblingCount * 2;
    const leftRange = paginationRange(1, leftItemCount);
    return [...leftRange, "ellipsis", totalPages];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightItemCount = 3 + siblingCount * 2;
    const rightRange = paginationRange(
      totalPages - rightItemCount + 1,
      totalPages,
    );
    return [1, "ellipsis", ...rightRange];
  }

  return [
    1,
    "ellipsis",
    ...paginationRange(leftSiblingIndex, rightSiblingIndex),
    "ellipsis",
    totalPages,
  ];
};

type ListPaginationProps = {
  totalPages: number;
  currentPage: number;
  pageParamName?: string;
  siblingCount?: number;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
};

export function ListPagination({
  totalPages,
  currentPage,
  pageParamName = "page",
  siblingCount = 1,
  previousLabel = "Anterior",
  nextLabel = "Siguiente",
  className,
}: ListPaginationProps) {
  const router = useRouter();
  const path = usePathname();
  const inheritSearchParams = useSearchParams();

  if (totalPages <= 1) {
    return null;
  }

  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const entries = getPaginationEntries(
    totalPages,
    safeCurrentPage,
    siblingCount,
  );

  const buildHref = (page: number) => {
    const queryParams = new URLSearchParams();

    inheritSearchParams.forEach((val, key) => {
      queryParams.set(key, val);
    });

    if (page <= 1) {
      queryParams.delete(pageParamName);
    } else {
      queryParams.set(pageParamName, page.toString());
    }

    const queryString = queryParams.toString();
    return queryString ? `${path}?${queryString}` : path;
  };

  const handleNavigate = (page: number) => (event: React.MouseEvent) => {
    event.preventDefault();
    router.replace(buildHref(page), { scroll: false });
  };

  const canGoPrevious = safeCurrentPage > 1;
  const canGoNext = safeCurrentPage < totalPages;
  const previousPage = canGoPrevious ? safeCurrentPage - 1 : safeCurrentPage;
  const nextPage = canGoNext ? safeCurrentPage + 1 : safeCurrentPage;

  return (
    <div data-slot="list-pagination" className={cn("w-full", className)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={buildHref(previousPage)}
              onClick={canGoPrevious ? handleNavigate(previousPage) : undefined}
              className={cn(!canGoPrevious && "pointer-events-none opacity-50")}
              text={previousLabel}
            />
          </PaginationItem>
          {entries.map((entry, index) =>
            entry === "ellipsis" ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={entry}>
                <PaginationLink
                  href={buildHref(entry)}
                  onClick={handleNavigate(entry)}
                  isActive={entry === safeCurrentPage}
                >
                  {entry}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          <PaginationItem>
            <PaginationNext
              href={buildHref(nextPage)}
              onClick={canGoNext ? handleNavigate(nextPage) : undefined}
              className={cn(!canGoNext && "pointer-events-none opacity-50")}
              text={nextLabel}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
