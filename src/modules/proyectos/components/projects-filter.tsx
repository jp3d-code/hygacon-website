"use client";

import type { ProjectFilters } from "@/modules/proyectos/hooks/use-projects";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/shared/components/ui/native-select";
import { projectFilters } from "@/shared/data/projects";

type Props = {
  filters: ProjectFilters;
  setFilters: (filters: ProjectFilters) => void;
  resetFilters: () => void;
  totalCount: number;
  resultCount: number;
  clientOptions: string[];
};

const labelClassName = "text-xs uppercase tracking-widest text-secondary";

type FilterSelectProps = {
  id: string;
  label: string;
  name: keyof ProjectFilters;
  options: string[];
  value: string;
  setFilters: (filters: ProjectFilters) => void;
  filters: ProjectFilters;
};

function FilterSelect({
  id,
  label,
  name,
  options,
  value,
  setFilters,
  filters,
}: FilterSelectProps) {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <Label htmlFor={id} className={labelClassName}>
        {label}
      </Label>
      <NativeSelect
        id={id}
        value={value}
        onChange={(event) =>
          setFilters({ ...filters, [name]: event.target.value })
        }
        className="w-full"
      >
        {options.map((option) => (
          <NativeSelectOption key={option} value={option}>
            {option}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
}

export function ProjectsFilter({
  filters,
  setFilters,
  resetFilters,
  totalCount,
  resultCount,
  clientOptions,
}: Props) {
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
          <Label htmlFor="query" className={labelClassName}>
            Buscar proyecto o cliente...
          </Label>
          <Input
            id="query"
            value={filters.query}
            onChange={(event) =>
              setFilters({ ...filters, query: event.target.value })
            }
            placeholder="Buscar proyecto o cliente..."
          />
        </div>
        <FilterSelect
          id="sector"
          label="Sector"
          name="sector"
          options={projectFilters.sector}
          value={filters.sector}
          setFilters={setFilters}
          filters={filters}
        />
        <FilterSelect
          id="service-area"
          label="Área de servicio"
          name="serviceArea"
          options={projectFilters.serviceArea}
          value={filters.serviceArea}
          setFilters={setFilters}
          filters={filters}
        />
        <FilterSelect
          id="status"
          label="Estado"
          name="status"
          options={projectFilters.status}
          value={filters.status}
          setFilters={setFilters}
          filters={filters}
        />
        <FilterSelect
          id="client"
          label="Cliente"
          name="client"
          options={clientOptions}
          value={filters.client}
          setFilters={setFilters}
          filters={filters}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <Button variant="outline" onClick={resetFilters} size="sm">
          Limpiar filtros
        </Button>
        <span className="text-muted-foreground text-sm">
          {resultCount} proyectos encontrados
        </span>
      </div>
    </div>
  );
}
