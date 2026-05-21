import { builder } from "@/lib/schema/builder";

export const ArticleStatus = builder.enumType("ArticleStatus", {
  values: ["DRAFT", "PUBLISHED", "ARCHIVED"] as const,
});

export const Article = builder.drizzleObject("articles", {
  name: "Article",
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    slug: t.exposeString("slug"),
    excerpt: t.exposeString("excerpt", { nullable: true }),
    content: t.exposeString("content"),
    status: t.expose("status", { type: ArticleStatus }),
    publishedAt: t.expose("publishedAt", { type: "DateTime", nullable: true }),
    views: t.exposeInt("views"),
    readingTimeMin: t.exposeInt("readingTimeMin", { nullable: true }),
    author: t.relation("author"),
    featuredImage: t.relation("featuredImage"),
    attachments: t.relation("attachments"),
    createdAt: t.expose("createdAt", { type: "DateTime" }),
    updatedAt: t.expose("updatedAt", { type: "DateTime" }),
  }),
});
