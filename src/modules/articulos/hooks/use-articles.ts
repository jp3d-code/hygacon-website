"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Article, Tag } from "@/payload-types";

export type ArticleFilters = {
  query: string;
  tag: string;
  status: string;
  year: string;
};

const initialFilters: ArticleFilters = {
  query: "",
  tag: "Todos",
  status: "Todos",
  year: "Todos",
};

const matchesSelect = (
  value: string,
  filterValue: string,
  defaultValue: string,
) => filterValue === defaultValue || value === filterValue;

const matchesQuery = (article: Article, query: string) => {
  if (!query) {
    return true;
  }

  const haystack = [article.title, article.excerpt ?? ""]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
};

const areFiltersEqual = (left: ArticleFilters, right: ArticleFilters) =>
  left.query === right.query &&
  left.tag === right.tag &&
  left.status === right.status &&
  left.year === right.year;

const normalizeParam = (value: string | null, fallback: string) =>
  value?.trim() ? value : fallback;

const buildSearchParams = (filters: ArticleFilters) => {
  const params = new URLSearchParams();

  if (filters.query.trim()) {
    params.set("query", filters.query.trim());
  }

  if (filters.tag !== initialFilters.tag) {
    params.set("tag", filters.tag);
  }

  if (filters.status !== initialFilters.status) {
    params.set("status", filters.status);
  }

  if (filters.year !== initialFilters.year) {
    params.set("year", filters.year);
  }

  return params;
};

const parseFilters = (
  searchParams: URLSearchParams,
  tagOptions: string[],
  yearOptions: string[],
): ArticleFilters => {
  const tag = normalizeParam(searchParams.get("tag"), initialFilters.tag);
  const status = normalizeParam(
    searchParams.get("status"),
    initialFilters.status,
  );
  const year = normalizeParam(searchParams.get("year"), initialFilters.year);

  return {
    query: normalizeParam(searchParams.get("query"), initialFilters.query),
    tag: tagOptions.includes(tag) ? tag : initialFilters.tag,
    status: ["Todos", "draft", "published"].includes(status)
      ? status
      : initialFilters.status,
    year: yearOptions.includes(year) ? year : initialFilters.year,
  };
};

export function useArticles(articlesData: Article[], tags: Tag[]) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastParamsRef = useRef<string | null>(null);

  const [filters, setFilters] = useState<ArticleFilters>(initialFilters);
  const filtersEnabled = false;

  const tagOptions = useMemo(
    () => [initialFilters.tag, ...tags.map((t) => t.name)],
    [tags],
  );

  const years = useMemo(() => {
    const uniqueYears = Array.from(
      new Set(
        articlesData
          .map((a) => {
            const date = a.publishedAt ?? a.createdAt;
            return date ? new Date(date).getFullYear().toString() : "";
          })
          .filter(Boolean),
      ),
    ).sort((a, b) => Number(b) - Number(a));

    return uniqueYears;
  }, [articlesData]);

  const yearOptions = useMemo(() => [initialFilters.year, ...years], [years]);

  const paramsString = useMemo(() => searchParams.toString(), [searchParams]);

  useEffect(() => {
    if (lastParamsRef.current === paramsString) {
      return;
    }

    lastParamsRef.current = paramsString;
    const nextFilters = parseFilters(
      new URLSearchParams(paramsString),
      tagOptions,
      yearOptions,
    );

    if (!areFiltersEqual(filters, nextFilters)) {
      setFilters(nextFilters);
    }
  }, [filters, paramsString, tagOptions, yearOptions]);

  const filteredArticles = useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    return articlesData.filter((article) => {
      if (!matchesQuery(article, query)) {
        return false;
      }

      if (
        !matchesSelect(
          (article.tags ?? [])
            .map((tag) => (typeof tag === "object" ? tag.name : ""))
            .filter(Boolean)
            .join(", "),
          filters.tag,
          initialFilters.tag,
        )
      ) {
        return false;
      }

      if (
        !matchesSelect(article.status, filters.status, initialFilters.status)
      ) {
        return false;
      }

      const articleDate = article.publishedAt ?? article.createdAt;
      const articleYear = articleDate
        ? new Date(articleDate).getFullYear().toString()
        : "";

      if (!matchesSelect(articleYear, filters.year, initialFilters.year)) {
        return false;
      }

      return true;
    });
  }, [filters, articlesData]);

  const visibleArticles = filtersEnabled ? filteredArticles : articlesData;

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  useEffect(() => {
    const nextQuery = buildSearchParams(filters).toString();

    if (nextQuery === paramsString) {
      return;
    }

    const nextUrl = nextQuery ? `${pathname}?${nextQuery}` : pathname;
    router.replace(nextUrl, { scroll: false });
  }, [filters, paramsString, pathname, router]);

  return {
    filters,
    filteredArticles: visibleArticles,
    resetFilters,
    resultCount: visibleArticles.length,
    setFilters,
    tagOptions,
    totalCount: articlesData.length,
    yearOptions,
  };
}
