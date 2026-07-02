import config from "@payload-config";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import { ArticleContent } from "@/modules/articulos/components/article-content";
import { ArticleHeader } from "@/modules/articulos/components/article-header";
import { RelatedArticles } from "@/modules/articulos/components/related-articles";
import type { Article } from "@/payload-types";
import { Container, Section } from "@/shared/components/ui/section";

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

async function getRelatedArticles(slug: string): Promise<Article[]> {
  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: "articles",
    depth: 1,
    limit: 2,
    sort: "-publishedAt",
    where: {
      slug: {
        not_equals: slug,
      },
      status: {
        equals: "published",
      },
    },
  });

  return result.docs;
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
  const [article, relatedArticles] = await Promise.all([
    getArticle(slug),
    getRelatedArticles(slug),
  ]);

  if (!article) {
    notFound();
  }

  const contentHtml = convertLexicalToHTML({ data: article.content });

  return (
    <>
      <Section aria-labelledby="article-title" className="pt-10 md:pt-20">
        <Container className="max-w-4xl items-start gap-12">
          <ArticleHeader article={article} />
          <ArticleContent contentHtml={contentHtml} />
        </Container>
      </Section>
      <Section className="pt-6">
        <Container className="max-w-4xl items-start gap-12">
          <RelatedArticles articles={relatedArticles} />
        </Container>
      </Section>
    </>
  );
}
