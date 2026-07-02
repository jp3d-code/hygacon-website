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

type PaginationConfig<TParams extends SearchParams> = {
  pageKey?: FilterKey<TParams>;
  limitKey?: FilterKey<TParams>;
  defaultPage?: number;
  defaultLimit?: number;
  maxLimit?: number;
};

type ManageSearchParamsConfig<TParams extends SearchParams> = {
  query?: QueryConfig<TParams>;
  filters?: Array<FilterConfig<TParams>>;
  pagination?: PaginationConfig<TParams>;
};

type ManageSearchParamsResult = {
  where?: Where;
  pagination?: {
    page: number;
    limit: number;
  };
};

type ManageSearchParamsWithPaginationResult = {
  where?: Where;
  pagination: { page: number; limit: number };
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

const parsePositiveInt = (value: SearchParamValue, fallback: number) => {
  if (typeof value !== "string") {
    return fallback;
  }

  const parsed = Number.parseInt(value, 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    return fallback;
  }

  return parsed;
};

export function manageSearchParams<TParams extends SearchParams>(
  params: TParams,
  config: ManageSearchParamsConfig<TParams> & {
    pagination: PaginationConfig<TParams>;
  },
): ManageSearchParamsWithPaginationResult;

export function manageSearchParams<TParams extends SearchParams>(
  params: TParams,
  config: ManageSearchParamsConfig<TParams>,
): ManageSearchParamsResult;

export function manageSearchParams<TParams extends SearchParams>(
  params: TParams,
  config: ManageSearchParamsConfig<TParams>,
): ManageSearchParamsResult | ManageSearchParamsWithPaginationResult {
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
    const pagination = config.pagination
      ? {
          pageKey: config.pagination.pageKey ?? ("page" as FilterKey<TParams>),
          limitKey:
            config.pagination.limitKey ?? ("limit" as FilterKey<TParams>),
          defaultPage: Math.max(1, config.pagination.defaultPage ?? 1),
          defaultLimit: Math.max(1, config.pagination.defaultLimit ?? 12),
          maxLimit: config.pagination.maxLimit,
        }
      : null;

    return {
      where: undefined,
      pagination: pagination
        ? {
            page: parsePositiveInt(
              params[pagination.pageKey],
              pagination.defaultPage,
            ),
            limit: Math.min(
              parsePositiveInt(
                params[pagination.limitKey],
                pagination.defaultLimit,
              ),
              pagination.maxLimit ?? Number.POSITIVE_INFINITY,
            ),
          }
        : undefined,
    };
  }

  const pagination = config.pagination
    ? {
        pageKey: config.pagination.pageKey ?? ("page" as FilterKey<TParams>),
        limitKey: config.pagination.limitKey ?? ("limit" as FilterKey<TParams>),
        defaultPage: Math.max(1, config.pagination.defaultPage ?? 1),
        defaultLimit: Math.max(1, config.pagination.defaultLimit ?? 12),
        maxLimit: config.pagination.maxLimit,
      }
    : null;

  return {
    where: {
      and: conditions,
    },
    pagination: pagination
      ? {
          page: parsePositiveInt(
            params[pagination.pageKey],
            pagination.defaultPage,
          ),
          limit: Math.min(
            parsePositiveInt(
              params[pagination.limitKey],
              pagination.defaultLimit,
            ),
            pagination.maxLimit ?? Number.POSITIVE_INFINITY,
          ),
        }
      : undefined,
  };
}
