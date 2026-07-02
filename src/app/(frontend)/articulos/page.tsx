import config from "@payload-config";
import type { Metadata } from "next";
import { getPayload } from "payload";
import { Suspense } from "react";
import { ArticlesFilter } from "@/modules/articulos/components/articles-filter";
import { ArticlesGrid } from "@/modules/articulos/components/articles-grid";
import { ListPagination } from "@/shared/components/layout/pagination";
import { PageTitle } from "@/shared/components/ui/page-title";
import { Container, Section } from "@/shared/components/ui/section";
import { routes } from "@/shared/config/routes";
import {
  manageSearchParams,
  resolveEquals,
  resolveIn,
} from "@/shared/lib/search-params";

export const metadata: Metadata = {
  title: routes.articulos.name,
};

type SearchParams = Promise<{
  query?: string;
  tag?: string;
  status?: string;
  page?: string;
  limit?: string;
}>;

async function getArticlesData(searchParams: Awaited<SearchParams>) {
  const payload = await getPayload({ config });

  const tagsResponse = await payload.find({
    collection: "tags",
    depth: 0,
    sort: "name",
  });

  const { where, pagination } = manageSearchParams(searchParams, {
    query: {
      key: "query",
      fields: ["title", "excerpt"],
    },
    filters: [
      { key: "status", resolve: resolveEquals() },
      { key: "tag", resolve: resolveIn("tags") },
    ],
    pagination: {
      defaultPage: 1,
      defaultLimit: 9,
    },
  });

  const page = pagination.page;
  const limit = pagination.limit;

  const articlesResponse = await payload.find({
    collection: "articles",
    depth: 1,
    sort: "-publishedAt",
    where,
    page,
    limit,
  });

  return {
    articles: articlesResponse.docs,
    totalDocs: articlesResponse.totalDocs,
    totalPages: articlesResponse.totalPages,
    tags: tagsResponse.docs,
    currentPage: page,
  };
}

export default async function ArticulosPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const { articles, totalDocs, totalPages, tags, currentPage } =
    await getArticlesData(searchParams);

  return (
    <>
      <PageTitle title={routes.articulos.name} />
      <Suspense fallback={null}>
        <Section>
          <Container className="gap-10" animation={false}>
            <ArticlesFilter
              totalCount={totalDocs}
              resultCount={articles.length}
              tagOptions={tags}
            />
            <ArticlesGrid articles={articles} />
            <ListPagination totalPages={totalPages} currentPage={currentPage} />
          </Container>
        </Section>
      </Suspense>
    </>
  );
}
