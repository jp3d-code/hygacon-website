import type { Article, Tag } from "@/payload-types";
import { Badge } from "@/shared/components/ui/badge";
import { formatDate, getCollections, getMediaUrl } from "@/shared/lib/utils";

type Props = {
  article: Article;
};

export function ArticleHeader({ article }: Props) {
  const coverImage = getMediaUrl(article.coverImage);
  const publishedAt = formatDate(article.publishedAt ?? article.createdAt);
  const tags = getCollections<Tag>(article.tags);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-3">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
          {publishedAt}
        </span>
        <h1
          id="article-title"
          className="font-condensed font-extrabold text-5xl text-secondary uppercase"
        >
          {article.title}
        </h1>
        {article.excerpt && (
          <p className="text-lg text-muted-foreground">{article.excerpt}</p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Badge key={tag.name} variant="secondary">
            {tag.name}
          </Badge>
        ))}
      </div>
      {coverImage && (
        <img
          src={coverImage}
          alt={article.title}
          className="h-80 w-full rounded-2xl object-cover shadow-md"
        />
      )}
    </div>
  );
}
