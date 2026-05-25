import config from "@payload-config";
import type { Metadata } from "next";
import { getPayload } from "payload";
import { Suspense } from "react";
import { ArticlesPage } from "@/modules/articulos/components/articles-page";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";

export const metadata: Metadata = {
  title: routes.articulos.name,
};

async function getArticlesData() {
  const payload = await getPayload({ config });
  const [articlesResponse, tagsResponse] = await Promise.all([
    payload.find({
      collection: "articles",
      depth: 1,
      sort: "-publishedAt",
    }),
    payload.find({
      collection: "tags",
      depth: 0,
      sort: "name",
    }),
  ]);

  return {
    articles: articlesResponse.docs,
    tags: tagsResponse.docs,
  };
}

export default async function ArticulosPage() {
  const { articles, tags } = await getArticlesData();

  return (
    <>
      <PageTitle title={routes.articulos.name} />
      <Suspense fallback={null}>
        <ArticlesPage articles={articles} tags={tags} />
      </Suspense>
    </>
  );
}
