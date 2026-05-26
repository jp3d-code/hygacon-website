import Link from "next/link";
import type { Article, Tag } from "@/payload-types";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import { formatDate, getCollections, getMediaUrl } from "@/shared/lib/utils";

type Props = {
  article: Article;
  i: number;
};

export function ArticleCard({ article, i }: Props) {
  const coverImage = getMediaUrl(article.coverImage);
  const publishedAt = article.publishedAt ?? article.createdAt;
  const tags = getCollections<Tag>(article.tags);

  return (
    <Card key={article.id} className="py-0 shadow-sm" i={i}>
      <Link href={`/articulos/${article.slug}`} className="group">
        {coverImage ? (
          <img
            src={coverImage}
            alt={article.title}
            className="aspect-video w-full object-cover transition-opacity group-hover:opacity-90"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center bg-muted"></div>
        )}
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag.name} variant="secondary" size="sm">
                {tag.name}
              </Badge>
            ))}
          </div>
          <div>
            <h3 className="font-bold text-lg text-secondary transition-colors group-hover:text-primary">
              {article.title}
            </h3>
            {article.excerpt && (
              <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
                {article.excerpt}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-muted-foreground uppercase tracking-wide">
              {article.status === "published" && "Publicado"}
              {article.status === "draft" && "Borrador"}
            </span>
            <span className="text-muted-foreground">
              {formatDate(publishedAt)}
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
