import type { Where } from "payload";

type SearchParamValue = string | undefined;
type SearchParams = Record<string, SearchParamValue>;
type FilterKey<TParams extends SearchParams> = Extract<keyof TParams, string>;

type FilterResolver<TParams extends SearchParams> = (args: {
  value: string;
  key: FilterKey<TParams>;
  params: TParams;
}) => Where | null | undefined;

type QueryConfig<TParams extends SearchParams> = {
  key: FilterKey<TParams>;
  fields: string[];
};

type FilterConfig<TParams extends SearchParams> = {
  key: FilterKey<TParams>;
  resolve: FilterResolver<TParams>;
};

type ManageSearchParamsConfig<TParams extends SearchParams> = {
  query?: QueryConfig<TParams>;
  filters?: Array<FilterConfig<TParams>>;
};

export const resolveEquals =
  <TParams extends SearchParams>(field?: string): FilterResolver<TParams> =>
  ({ value, key }) =>
    ({
      [field ?? key]: {
        equals: value,
      },
    }) as Where;

export const resolveIn =
  <TParams extends SearchParams>(field?: string): FilterResolver<TParams> =>
  ({ value, key }) =>
    ({
      [field ?? key]: {
        in: [value],
      },
    }) as Where;

export function manageSearchParams<TParams extends SearchParams>(
  params: TParams,
  config: ManageSearchParamsConfig<TParams>,
): Where | undefined {
  const conditions: Where[] = [];

  if (config.query) {
    const rawValue = params[config.query.key];
    const value = typeof rawValue === "string" ? rawValue.trim() : "";

    if (value) {
      const orConditions = config.query.fields.map(
        (field) =>
          ({
            [field]: { like: value },
          }) as Where,
      );

      conditions.push({
        or: orConditions,
      });
    }
  }

  for (const filter of config.filters ?? []) {
    const rawValue = params[filter.key];
    const value = typeof rawValue === "string" ? rawValue.trim() : "";

    if (!value) {
      continue;
    }

    const clause = filter.resolve({ value, key: filter.key, params });

    if (clause) {
      conditions.push(clause);
    }
  }

  if (conditions.length === 0) {
    return undefined;
  }

  return {
    and: conditions,
  };
}
