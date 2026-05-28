"use client";

import { ArticleCard } from "@/modules/articulos/components/articles-card";
import { ArticlesFilter } from "@/modules/articulos/components/articles-filter";
import type { Article, Tag } from "@/payload-types";
import type { FilterOption } from "@/shared/components/layout/list-toolbar";
import { Container, Section } from "@/shared/components/ui/section";

type Props = {
  articles: Article[];
  totalDocs: number;
  tags: Tag[];
};

export function ArticlesPage({ articles, totalDocs, tags }: Props) {
  const tagOptions: FilterOption[] = tags.map((tag) => ({
    value: tag.id.toString(),
    label: tag.name,
  }));

  return (
    <Section>
      <Container className="gap-10" animation={false}>
        <ArticlesFilter
          totalCount={totalDocs}
          resultCount={articles.length}
          tagOptions={tagOptions}
        />
        <div className="grid w-full gap-6 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((article, i) => (
            <ArticleCard article={article} key={article.id} i={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
