import config from "@payload-config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import type { Article, Tag } from "@/payload-types";
import { Badge } from "@/shared/components/ui/badge";
import { Container, Section } from "@/shared/components/ui/section";
import { formatDate, getCollections, getMediaUrl } from "@/shared/lib/utils";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getArticle(slug: string): Promise<Article | null> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "articles",
    depth: 1,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  return result.docs[0] ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.excerpt ?? undefined,
  };
}

export default async function ArticuloPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const coverImage = getMediaUrl(article.coverImage);
  const publishedAt = formatDate(article.publishedAt ?? article.createdAt);
  const tags = getCollections<Tag>(article.tags);
  const contentHtml = convertLexicalToHTML({ data: article.content });

  return (
    <Section className="bg-muted/30" aria-labelledby="article-title">
      <Container className="items-start gap-12">
        <div className="flex w-full flex-col gap-6">
          {coverImage ? (
            <img
              src={coverImage}
              alt={article.title}
              className="h-80 w-full rounded-2xl object-cover shadow-md"
            />
          ) : null}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Badge key={tag.name} variant="secondary">
                {tag.name}
              </Badge>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-muted-foreground text-xs uppercase tracking-widest">
              {publishedAt}
            </span>
            <h1
              id="article-title"
              className="font-condensed font-extrabold text-4xl text-secondary uppercase"
            >
              {article.title}
            </h1>
            {article.excerpt ? (
              <p className="text-lg text-muted-foreground">{article.excerpt}</p>
            ) : null}
          </div>
        </div>
        <article
          className="prose prose-neutral w-full max-w-none prose-blockquote:border-primary/40 prose-hr:border-border prose-headings:font-condensed prose-a:text-primary prose-blockquote:text-secondary/80 prose-h2:text-3xl prose-h3:text-2xl prose-headings:text-secondary prose-strong:text-secondary text-secondary prose-li:marker:text-primary"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </Container>
    </Section>
  );
}
