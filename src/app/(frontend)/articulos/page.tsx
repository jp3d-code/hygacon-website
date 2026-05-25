import config from "@payload-config";
import type { Metadata } from "next";
import { getPayload } from "payload";
import { Suspense } from "react";
import { ArticlesPage } from "@/modules/articulos/components/articles-page";
import type { Article, Tag } from "@/payload-types";
import { PageTitle } from "@/shared/components/ui/page-title";
import { routes } from "@/shared/config/routes";
import { getMediaUrl } from "@/shared/lib/utils";
import type { ArticleSummary } from "@/shared/types/data";

export const metadata: Metadata = {
  title: routes.articulos.name,
};

const toArticleSummary = (article: Article): ArticleSummary => {
  const tags = (article.tags ?? [])
    .map((tag) => (typeof tag === "object" ? tag.name : null))
    .filter((tagName): tagName is string => Boolean(tagName));

  return {
    id: article.id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    coverImage: getMediaUrl(article.coverImage),
    publishedAt: article.publishedAt ?? article.createdAt,
    status: article.status,
    tags,
  };
};

const toTagName = (tag: Tag): string => tag.name;

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
    articles: articlesResponse.docs.map(toArticleSummary),
    tags: tagsResponse.docs.map(toTagName),
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
