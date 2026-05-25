"use client";

import type { ArticleFilters } from "@/modules/articulos/hooks/use-articles";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/shared/components/ui/native-select";

type Props = {
  filters: ArticleFilters;
  setFilters: (filters: ArticleFilters) => void;
  resetFilters: () => void;
  totalCount: number;
  resultCount: number;
  tagOptions: string[];
  yearOptions: string[];
};

const labelClassName = "text-xs uppercase tracking-widest text-secondary";

type FilterSelectProps = {
  id: string;
  label: string;
  name: keyof ArticleFilters;
  options: string[];
  value: string;
  setFilters: (filters: ArticleFilters) => void;
  filters: ArticleFilters;
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

export function ArticlesFilter({
  filters,
  setFilters,
  resetFilters,
  totalCount,
  resultCount,
  tagOptions,
  yearOptions,
}: Props) {
  return (
    <div className="w-full rounded-xl border border-border bg-muted/40 p-6">
      <div className="mb-4 flex flex-col gap-2">
        <span className="font-bold text-secondary text-xl">
          Filtrar artículos
        </span>
        <span className="text-muted-foreground text-sm">
          {totalCount} artículos
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col gap-2 text-sm lg:col-span-2">
          <Label htmlFor="query" className={labelClassName}>
            Buscar artículo...
          </Label>
          <Input
            id="query"
            value={filters.query}
            onChange={(event) =>
              setFilters({ ...filters, query: event.target.value })
            }
            placeholder="Buscar artículo..."
          />
        </div>
        <FilterSelect
          id="tag"
          label="Etiqueta"
          name="tag"
          options={tagOptions}
          value={filters.tag}
          setFilters={setFilters}
          filters={filters}
        />
        <FilterSelect
          id="status"
          label="Estado"
          name="status"
          options={["Todos", "draft", "published"]}
          value={filters.status}
          setFilters={setFilters}
          filters={filters}
        />
        <FilterSelect
          id="year"
          label="Año"
          name="year"
          options={yearOptions}
          value={filters.year}
          setFilters={setFilters}
          filters={filters}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <Button variant="outline" onClick={resetFilters} size="sm">
          Limpiar filtros
        </Button>
        <span className="text-muted-foreground text-sm">
          {resultCount} artículos encontrados
        </span>
      </div>
    </div>
  );
}
