"use client";

import {
  ListToolbar,
  ListToolbarCount,
  ListToolbarFilter,
  ListToolbarFooter,
  ListToolbarReset,
  ListToolbarSearch,
} from "@/shared/components/layout/list-toolbar";

type Props = {
  totalCount: number;
  resultCount: number;
  clientOptions: string[];
  sectorOptions?: string[];
  serviceAreaOptions?: string[];
  statusOptions?: string[];
};

export function ProjectsFilter({
  totalCount,
  resultCount,
  clientOptions,
  sectorOptions = [],
  serviceAreaOptions = [],
  statusOptions = [],
}: Props) {
  const toOptions = (options: string[]) => {
    const normalized = options[0] === "Todos" ? options.slice(1) : options;

    return normalized.map((opt) => ({
      value: opt,
      label: opt,
    }));
  };

  return (
    <div className="w-full rounded-xl border border-border bg-muted/40 p-6">
      <div className="mb-4 flex flex-col gap-2">
        <span className="font-bold text-secondary text-xl">
          Filtrar proyectos
        </span>
        <span className="text-muted-foreground text-sm">
          {totalCount} proyectos en total
        </span>
      </div>

      <ListToolbar className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ListToolbarSearch
          queryParamName="query"
          searchPlaceholder="Buscar proyecto..."
          className="w-full"
        />

        <ListToolbarFilter
          queryParamName="sector"
          filterPlaceholder="Sector"
          filterOptions={toOptions(sectorOptions)}
          className="w-full"
        />

        <ListToolbarFilter
          queryParamName="serviceArea"
          filterPlaceholder="Área de Servicio"
          filterOptions={toOptions(serviceAreaOptions)}
          className="w-full"
        />

        <ListToolbarFilter
          queryParamName="status"
          filterPlaceholder="Estado"
          filterOptions={toOptions(statusOptions)}
          className="w-full"
        />

        <ListToolbarFilter
          queryParamName="client"
          filterPlaceholder="Cliente"
          filterOptions={toOptions(clientOptions)}
          className="w-full"
        />
      </ListToolbar>
      <ListToolbarFooter>
        <ListToolbarReset />
        <ListToolbarCount resultCount={resultCount} />
      </ListToolbarFooter>
    </div>
  );
}
