"use client";

import { ArticleCard } from "@/modules/articulos/components/articles-card";
import type { Article } from "@/payload-types";

type Props = {
  articles: Article[];
};

export function ArticlesGrid({ articles }: Props) {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
      {articles.map((article, i) => (
        <ArticleCard article={article} key={article.id} i={i} />
      ))}
    </div>
  );
}
