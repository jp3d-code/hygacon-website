"use client";

import { ArticleCard } from "@/modules/articulos/components/articles-card";
import { ArticlesFilter } from "@/modules/articulos/components/articles-filter";
import { useArticles } from "@/modules/articulos/hooks/use-articles";
import { Container, Section } from "@/shared/components/ui/section";
import type { ArticleSummary } from "@/shared/types/data";

type Props = {
  articles: ArticleSummary[];
  tags: string[];
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
