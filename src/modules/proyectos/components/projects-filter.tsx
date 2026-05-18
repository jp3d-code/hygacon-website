"use client";

import { useMemo } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { projectFilters } from "@/shared/data/projects";

type Filters = {
  query: string;
  sector: string;
  serviceArea: string;
  status: string;
  client: string;
};

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
  totalCount: number;
  resultCount: number;
  clients: string[];
};

const labelClassName = "text-xs uppercase tracking-widest text-secondary";

export function ProjectsFilter({
  filters,
  onChange,
  onReset,
  totalCount,
  resultCount,
  clients,
}: Props) {
  const clientOptions = useMemo(
    () => ["Todos los clientes", ...clients],
    [clients],
  );

  const renderSelect = (
    label: string,
    name: keyof Filters,
    options: string[],
  ) => (
    <label className="flex flex-col gap-2 text-sm">
      <span className={labelClassName}>{label}</span>
      <select
        value={filters[name]}
        onChange={(event) =>
          onChange({ ...filters, [name]: event.target.value })
        }
        className="h-9 w-full rounded-lg border border-input bg-background px-3 text-secondary text-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <div className="w-full rounded-xl border border-border bg-muted/40 p-6">
      <div className="mb-4 flex flex-col gap-2">
        <span className="font-bold text-secondary text-xl">
          Filtrar proyectos
        </span>
        <span className="text-muted-foreground text-sm">
          {totalCount} proyectos
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-2 text-sm lg:col-span-2">
          <label htmlFor="query">
            <span className={labelClassName}>Buscar proyecto o cliente...</span>
          </label>
          <Input
            name="query"
            value={filters.query}
            onChange={(event) =>
              onChange({ ...filters, query: event.target.value })
            }
            placeholder="Buscar proyecto o cliente..."
          />
        </div>
        {renderSelect("Sector", "sector", projectFilters.sector)}
        {renderSelect(
          "Área de servicio",
          "serviceArea",
          projectFilters.serviceArea,
        )}
        {renderSelect("Estado", "status", projectFilters.status)}
        {renderSelect("Cliente", "client", clientOptions)}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <Button variant="outline" onClick={onReset} size="sm">
          Limpiar filtros
        </Button>
        <span className="text-muted-foreground text-sm">
          {resultCount} proyectos encontrados
        </span>
      </div>
    </div>
  );
}
