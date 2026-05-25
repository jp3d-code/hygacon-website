"use client";

import { ArticleCard } from "@/modules/articulos/components/articles-card";
import { ArticlesFilter } from "@/modules/articulos/components/articles-filter";
import { useArticles } from "@/modules/articulos/hooks/use-articles";
import type { Article, Tag } from "@/payload-types";
import { Container, Section } from "@/shared/components/ui/section";

type Props = {
  articles: Article[];
  tags: Tag[];
};

export function ArticlesPage({ articles, tags }: Props) {
  const {
    filters,
    filteredArticles,
    resetFilters,
    resultCount,
    setFilters,
    tagOptions,
    totalCount,
    yearOptions,
  } = useArticles(articles, tags);

  return (
    <Section>
      <Container className="gap-10" animation={false}>
        <ArticlesFilter
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
          totalCount={totalCount}
          resultCount={resultCount}
          tagOptions={tagOptions}
          yearOptions={yearOptions}
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredArticles.map((article, i) => (
            <ArticleCard article={article} key={article.id} i={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
