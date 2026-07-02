import Link from "next/link";
import type { Article, Tag } from "@/payload-types";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  SectionDescription,
  SectionHeader,
  SectionOverline,
  SectionTitle,
} from "@/shared/components/ui/section";
import { formatDate, getCollections, getMediaUrl } from "@/shared/lib/utils";

type Props = {
  articles: Article[];
};

export function RelatedArticles({ articles }: Props) {
  if (!articles.length) {
    return null;
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <SectionHeader className="items-start">
        <SectionOverline>Explora mas</SectionOverline>
        <SectionTitle
          first="Articulos"
          second="Relacionados"
          className="justify-start"
        />
        <SectionDescription className="text-left">
          Sigue leyendo con los ultimos contenidos publicados.
        </SectionDescription>
      </SectionHeader>

      <div className="grid w-full gap-6 md:grid-cols-2">
        {articles.map((article, i) => {
          const coverImage = getMediaUrl(article.coverImage);
          const publishedAt = formatDate(
            article.publishedAt ?? article.createdAt,
          );
          const tags = getCollections<Tag>(article.tags);

          return (
            <Card key={article.id} className="py-0 shadow-sm" i={i}>
              <Link href={`/articulos/${article.slug}`} className="group">
                <div className="flex aspect-video w-full items-center justify-center overflow-hidden bg-muted">
                  {coverImage && (
                    <img
                      src={coverImage}
                      alt={article.title}
                      className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
                    />
                  )}
                </div>
                <CardContent className="flex flex-col gap-4 p-4">
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag) => (
                      <Badge key={tag.name} variant="secondary" size="sm">
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <h3 className="font-bold font-condensed text-secondary text-xl transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
                        {article.excerpt}
                      </p>
                    )}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {publishedAt}
                  </span>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
