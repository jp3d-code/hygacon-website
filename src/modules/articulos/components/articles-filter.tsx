"use client";

import type { Tag } from "@/payload-types";
import {
  ListToolbar,
  ListToolbarCount,
  ListToolbarFilter,
  ListToolbarFooter,
  ListToolbarReset,
  ListToolbarSearch,
} from "@/shared/components/layout/list-toolbar";
import { toOptions } from "@/shared/lib/utils";

type Props = {
  totalCount: number;
  resultCount: number;
  tagOptions: Tag[];
};

export function ArticlesFilter({ totalCount, resultCount, tagOptions }: Props) {
  const statusOptions = [
    { value: "draft", label: "Borrador" },
    { value: "published", label: "Publicado" },
  ];

  return (
    <div className="w-full rounded-xl border border-border bg-muted/40 p-6">
      <div className="mb-4 flex flex-col gap-2">
        <span className="font-bold text-secondary text-xl">
          Filtrar artículos
        </span>
        <span className="text-muted-foreground text-sm">
          {totalCount} artículos en total
        </span>
      </div>

      <ListToolbar className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ListToolbarSearch
          queryParamName="query"
          searchPlaceholder="Buscar artículo..."
          className="w-full"
        />

        <ListToolbarFilter
          queryParamName="tag"
          filterPlaceholder="Etiqueta"
          filterOptions={toOptions(tagOptions, (tag) => ({
            label: tag.name,
            value: tag.id.toString(),
          }))}
          className="w-full"
        />

        <ListToolbarFilter
          queryParamName="status"
          filterPlaceholder="Estado"
          filterOptions={statusOptions}
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
