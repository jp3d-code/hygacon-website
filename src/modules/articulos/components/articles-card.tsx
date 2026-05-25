import Link from "next/link";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import { formatDate } from "@/shared/lib/utils";
import type { ArticleSummary } from "@/shared/types/data";

type Props = {
  article: ArticleSummary;
  i: number;
};

export function ArticleCard({ article, i }: Props) {
  return (
    <Card key={article.id} className="shadow-sm" i={i}>
      <Link href={`/articulos/${article.slug}`} className="group">
        <img
          src={
            article.coverImage ||
            "/assets/677bc326-1212-447e-89ba-9d73177a18d4.webp"
          }
          alt={article.title}
          className="h-56 w-full object-cover transition-opacity group-hover:opacity-90"
        />
        <CardContent className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
          <div>
            <h3 className="font-bold text-lg text-secondary transition-colors group-hover:text-primary">
              {article.title}
            </h3>
            {article.excerpt ? (
              <p className="mt-1 line-clamp-2 text-muted-foreground text-sm">
                {article.excerpt}
              </p>
            ) : null}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-muted-foreground uppercase tracking-wide">
              {article.status === "published" ? "Publicado" : "Borrador"}
            </span>
            <span className="text-muted-foreground">
              {formatDate(article.publishedAt)}
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
