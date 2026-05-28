"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { cn } from "@/shared/lib/utils";

function ListToolbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-toolbar"
      className={cn("flex w-full items-center justify-start gap-3", className)}
      {...props}
    />
  );
}

type ListToolbarSearchProps = React.ComponentProps<"input"> & {
  searchPlaceholder?: string;
  searchValue?: string;
  queryParamName: string;
};

function ListToolbarSearch({
  className,
  searchPlaceholder = "Buscar",
  queryParamName,
  ...props
}: ListToolbarSearchProps) {
  const router = useRouter();
  const path = usePathname();
  const inheritSearchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    inheritSearchParams.get(queryParamName) ?? "",
  );
  const searchDebounce = useDebounce(searchValue, 700);

  const onSearchChange = (value: string) => {
    const queryParams = new URLSearchParams();

    inheritSearchParams.forEach((val, key) => {
      queryParams.set(key, val);
    });

    if (value) {
      queryParams.set(queryParamName, value);
    } else {
      queryParams.delete(queryParamName);
    }

    router.replace(`${path}?${queryParams}`, { scroll: false });
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: ---
  useEffect(() => {
    onSearchChange(searchDebounce);
  }, [searchDebounce]);

  useEffect(() => {
    setSearchValue(inheritSearchParams.get(queryParamName) ?? "");
  }, [inheritSearchParams, queryParamName]);

  return (
    <div className="flex w-full flex-col text-sm lg:col-span-2">
      <Label
        htmlFor="query"
        className="mb-2 block text-secondary text-xs uppercase tracking-widest"
      >
        {searchPlaceholder}
      </Label>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
        <Input
          id="query"
          data-slot="list-toolbar-search"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearchChange(searchValue);
            }
          }}
          className={cn("w-56 pl-9 text-sm", className)}
          {...props}
        />
      </div>
    </div>
  );
}

export type FilterOption = {
  value: string;
  label: string;
};

type ListToolbarFilterProps = {
  className?: string;
  filterPlaceholder?: string;
  filterOptions?: FilterOption[];
  queryParamName?: string;
};

function ListToolbarFilter({
  className,
  filterPlaceholder = "Filtrar",
  filterOptions = [],
  queryParamName = "filter",
}: ListToolbarFilterProps) {
  const router = useRouter();
  const path = usePathname();
  const inheritSearchParams = useSearchParams();

  const currentValue = inheritSearchParams.get(queryParamName);

  const onFilterChange = (value: string | null) => {
    if (!value) return;

    const queryParams = new URLSearchParams();

    inheritSearchParams.forEach((val, key) => {
      queryParams.set(key, val);
    });

    if (value === "all") {
      queryParams.delete(queryParamName);
    } else if (value) {
      queryParams.set(queryParamName, value);
    }

    router.replace(`${path}?${queryParams}`, { scroll: false });
  };

  const selectValue = currentValue || undefined;

  return (
    <div className="flex w-full flex-col text-sm">
      <Label
        className="mb-2 block text-secondary text-xs uppercase tracking-widest"
        htmlFor={queryParamName}
      >
        {filterPlaceholder}
      </Label>
      <Select
        key={currentValue || "empty"}
        value={selectValue}
        onValueChange={onFilterChange}
        data-slot="list-toolbar-filter"
        id={queryParamName}
      >
        <SelectTrigger className={cn("w-48", className)}>
          <SelectValue placeholder={filterPlaceholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          {filterOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function ListToolbarActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="list-toolbar-actions"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function ListToolbarFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className="mt-5 flex w-full flex-wrap items-center justify-between gap-4"
      {...props}
    ></div>
  );
}

function ListToolbarReset({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const router = useRouter();
  const path = usePathname();

  const handleReset = () => {
    router.replace(path, { scroll: false });
  };

  return (
    <Button variant="outline" onClick={handleReset} size="sm" {...props}>
      Limpiar filtros
    </Button>
  );
}

function ListToolbarCount({
  className,
  resultCount,
  label = "resultados",
  ...props
}: React.ComponentProps<"div"> & { resultCount: number; label?: string }) {
  return (
    <div
      data-slot="list-toolbar-count"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    >
      {resultCount} {label}
    </div>
  );
}

export {
  ListToolbar,
  ListToolbarActions,
  ListToolbarCount,
  ListToolbarFilter,
  ListToolbarFooter,
  ListToolbarReset,
  ListToolbarSearch,
};
