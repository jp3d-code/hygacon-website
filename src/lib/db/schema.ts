import { createId } from "@paralleldrive/cuid2";
import { defineRelations } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const ROLE_VALUES = ["ADMIN", "WRITER"] as const;
export const MEDIA_TYPE_VALUES = ["IMAGE", "VIDEO", "AUDIO", "FILE"] as const;
export const ARTICLE_STATUS_VALUES = [
  "DRAFT",
  "PUBLISHED",
  "ARCHIVED",
] as const;

export type RoleValue = (typeof ROLE_VALUES)[number];
export type MediaTypeValue = (typeof MEDIA_TYPE_VALUES)[number];
export type ArticleStatusValue = (typeof ARTICLE_STATUS_VALUES)[number];

export const roleEnum = pgEnum("Role", ROLE_VALUES);
export const mediaTypeEnum = pgEnum("MediaType", MEDIA_TYPE_VALUES);
export const articleStatusEnum = pgEnum("ArticleStatus", ARTICLE_STATUS_VALUES);

export const users = pgTable(
  "User",
  {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: boolean("emailVerified").notNull().default(false),
    image: text("image"),
    createdAt: timestamp("createdAt", { mode: "date", precision: 3 })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date", precision: 3 })
      .notNull()
      .$defaultFn(() => new Date()),
    role: roleEnum("role").notNull().default("WRITER"),
  },
  (table) => ({
    emailUnique: uniqueIndex("User_email_key").on(table.email),
  }),
);

export const sessions = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expiresAt", { mode: "date", precision: 3 }).notNull(),
    token: text("token").notNull(),
    createdAt: timestamp("createdAt", { mode: "date", precision: 3 })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date", precision: 3 })
      .notNull()
      .$defaultFn(() => new Date()),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => ({
    userIdIdx: index("session_userId_idx").on(table.userId),
    tokenUnique: uniqueIndex("session_token_key").on(table.token),
  }),
);

export const accounts = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    idToken: text("idToken"),
    accessTokenExpiresAt: timestamp("accessTokenExpiresAt", {
      mode: "date",
      precision: 3,
    }),
    refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt", {
      mode: "date",
      precision: 3,
    }),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("createdAt", { mode: "date", precision: 3 })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date", precision: 3 })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => ({
    userIdIdx: index("account_userId_idx").on(table.userId),
  }),
);

export const verifications = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt", { mode: "date", precision: 3 }).notNull(),
    createdAt: timestamp("createdAt", { mode: "date", precision: 3 })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date", precision: 3 })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (table) => ({
    identifierIdx: index("verification_identifier_idx").on(table.identifier),
  }),
);

export const media = pgTable(
  "Media",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    objectKey: text("objectKey").notNull(),
    url: text("url"),
    alt: text("alt"),
    type: mediaTypeEnum("type").notNull(),
    size: integer("size").notNull(),
    mimeType: text("mimeType").notNull(),
    filename: text("filename").notNull(),
    createdAt: timestamp("createdAt", { mode: "date", precision: 3 })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date", precision: 3 })
      .notNull()
      .$defaultFn(() => new Date()),
    uploadedBy: text("uploadedBy").references(() => users.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
  },
  (table) => ({
    objectKeyUnique: uniqueIndex("Media_objectKey_key").on(table.objectKey),
    uploadedByIdx: index("Media_uploadedBy_idx").on(table.uploadedBy),
    typeIdx: index("Media_type_idx").on(table.type),
  }),
);

export const articles = pgTable(
  "Article",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => createId()),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    excerpt: text("excerpt"),
    content: text("content").notNull(),
    status: articleStatusEnum("status").notNull().default("DRAFT"),
    publishedAt: timestamp("publishedAt", { mode: "date", precision: 3 }),
    createdAt: timestamp("createdAt", { mode: "date", precision: 3 })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date", precision: 3 })
      .notNull()
      .$defaultFn(() => new Date()),
    authorId: text("authorId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
    featuredImageId: text("featuredImageId").references(() => media.id, {
      onDelete: "set null",
      onUpdate: "cascade",
    }),
    views: integer("views").notNull().default(0),
    readingTimeMin: integer("readingTimeMin"),
  },
  (table) => ({
    slugUnique: uniqueIndex("Article_slug_key").on(table.slug),
    authorIdIdx: index("Article_authorId_idx").on(table.authorId),
    statusIdx: index("Article_status_idx").on(table.status),
    publishedAtIdx: index("Article_publishedAt_idx").on(table.publishedAt),
    slugIdx: index("Article_slug_idx").on(table.slug),
  }),
);

export const articleAttachments = pgTable(
  "_ArticleAttachments",
  {
    articleId: text("A")
      .notNull()
      .references(() => articles.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    mediaId: text("B")
      .notNull()
      .references(() => media.id, { onDelete: "cascade", onUpdate: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.articleId, table.mediaId],
      name: "_ArticleAttachments_AB_pkey",
    }),
    mediaIdIdx: index("_ArticleAttachments_B_index").on(table.mediaId),
  }),
);

export const relations = defineRelations(
  {
    users,
    sessions,
    accounts,
    verifications,
    media,
    articles,
    articleAttachments,
  },
  (r) => ({
    users: {
      sessions: r.many.sessions({
        from: r.users.id,
        to: r.sessions.userId,
      }),
      accounts: r.many.accounts({
        from: r.users.id,
        to: r.accounts.userId,
      }),
      mediaUploads: r.many.media({
        from: r.users.id,
        to: r.media.uploadedBy,
      }),
      articles: r.many.articles({
        from: r.users.id,
        to: r.articles.authorId,
      }),
    },
    sessions: {
      user: r.one.users({
        from: r.sessions.userId,
        to: r.users.id,
        optional: false,
      }),
    },
    accounts: {
      user: r.one.users({
        from: r.accounts.userId,
        to: r.users.id,
        optional: false,
      }),
    },
    media: {
      uploader: r.one.users({
        from: r.media.uploadedBy,
        to: r.users.id,
      }),
      featuredInArticles: r.many.articles({
        from: r.media.id,
        to: r.articles.featuredImageId,
      }),
      articleAttachments: r.many.articleAttachments({
        from: r.media.id,
        to: r.articleAttachments.mediaId,
      }),
    },
    articles: {
      author: r.one.users({
        from: r.articles.authorId,
        to: r.users.id,
        optional: false,
      }),
      featuredImage: r.one.media({
        from: r.articles.featuredImageId,
        to: r.media.id,
      }),
      articleAttachments: r.many.articleAttachments({
        from: r.articles.id,
        to: r.articleAttachments.articleId,
      }),
      attachments: r.many.media({
        from: r.articles.id.through(r.articleAttachments.articleId),
        to: r.media.id.through(r.articleAttachments.mediaId),
      }),
    },
    articleAttachments: {
      article: r.one.articles({
        from: r.articleAttachments.articleId,
        to: r.articles.id,
        optional: false,
      }),
      media: r.one.media({
        from: r.articleAttachments.mediaId,
        to: r.media.id,
        optional: false,
      }),
    },
  }),
);

export type UserModel = typeof users.$inferSelect;
export type MediaModel = typeof media.$inferSelect;
export type ArticleModel = typeof articles.$inferSelect;

export const authSchema = {
  user: users,
  User: users,
  session: sessions,
  account: accounts,
  verification: verifications,
};
