"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { projectFilters, projects } from "@/shared/data/projects";
import type { Project } from "@/shared/types/data";

export type ProjectFilters = {
  query: string;
  sector: string;
  serviceArea: string;
  status: string;
  client: string;
};

const initialFilters: ProjectFilters = {
  query: "",
  sector: "Todos",
  serviceArea: "Todos",
  status: "Todos",
  client: "Todos los clientes",
};

const matchesSelect = (
  value: string,
  filterValue: string,
  defaultValue: string,
) => filterValue === defaultValue || value === filterValue;

const matchesQuery = (project: Project, query: string) => {
  if (!query) {
    return true;
  }

  const haystack = [project.name, project.client, project.location]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
};

const areFiltersEqual = (left: ProjectFilters, right: ProjectFilters) =>
  left.query === right.query &&
  left.sector === right.sector &&
  left.serviceArea === right.serviceArea &&
  left.status === right.status &&
  left.client === right.client;

const normalizeParam = (value: string | null, fallback: string) =>
  value?.trim() ? value : fallback;

const buildSearchParams = (filters: ProjectFilters) => {
  const params = new URLSearchParams();

  if (filters.query.trim()) {
    params.set("query", filters.query.trim());
  }

  if (filters.sector !== initialFilters.sector) {
    params.set("sector", filters.sector);
  }

  if (filters.serviceArea !== initialFilters.serviceArea) {
    params.set("serviceArea", filters.serviceArea);
  }

  if (filters.status !== initialFilters.status) {
    params.set("status", filters.status);
  }

  if (filters.client !== initialFilters.client) {
    params.set("client", filters.client);
  }

  return params;
};

const parseFilters = (
  searchParams: URLSearchParams,
  clients: string[],
): ProjectFilters => {
  const sector = normalizeParam(
    searchParams.get("sector"),
    initialFilters.sector,
  );
  const serviceArea = normalizeParam(
    searchParams.get("serviceArea"),
    initialFilters.serviceArea,
  );
  const status = normalizeParam(
    searchParams.get("status"),
    initialFilters.status,
  );
  const client = normalizeParam(
    searchParams.get("client"),
    initialFilters.client,
  );

  return {
    query: normalizeParam(searchParams.get("query"), initialFilters.query),
    sector: projectFilters.sector.includes(sector)
      ? sector
      : initialFilters.sector,
    serviceArea: projectFilters.serviceArea.includes(serviceArea)
      ? serviceArea
      : initialFilters.serviceArea,
    status: projectFilters.status.includes(status)
      ? status
      : initialFilters.status,
    client: clients.includes(client) ? client : initialFilters.client,
  };
};

export function useProjects() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastParamsRef = useRef<string | null>(null);

  const [filters, setFilters] = useState<ProjectFilters>(initialFilters);

  const clients = useMemo(
    () => Array.from(new Set(projects.map((project) => project.client))),
    [],
  );

  const clientOptions = useMemo(
    () => [initialFilters.client, ...clients],
    [clients],
  );

  const paramsString = useMemo(() => searchParams.toString(), [searchParams]);

  useEffect(() => {
    if (lastParamsRef.current === paramsString) {
      return;
    }

    lastParamsRef.current = paramsString;
    const nextFilters = parseFilters(
      new URLSearchParams(paramsString),
      clients,
    );

    if (!areFiltersEqual(filters, nextFilters)) {
      setFilters(nextFilters);
    }
  }, [clients, filters, paramsString]);

  const filteredProjects = useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    return projects.filter((project) => {
      if (!matchesQuery(project, query)) {
        return false;
      }

      if (
        !matchesSelect(project.sector, filters.sector, initialFilters.sector)
      ) {
        return false;
      }

      if (
        !matchesSelect(
          project.serviceArea,
          filters.serviceArea,
          initialFilters.serviceArea,
        )
      ) {
        return false;
      }

      if (
        !matchesSelect(project.status, filters.status, initialFilters.status)
      ) {
        return false;
      }

      if (
        !matchesSelect(project.client, filters.client, initialFilters.client)
      ) {
        return false;
      }

      return true;
    });
  }, [filters]);

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
    clientOptions,
    filters,
    filteredProjects,
    resetFilters,
    resultCount: filteredProjects.length,
    setFilters,
    totalCount: projects.length,
  };
}
