import SchemaBuilder from "@pothos/core";
import DrizzlePlugin from "@pothos/plugin-drizzle";
import ScopeAuthPlugin from "@pothos/plugin-scope-auth";
import ValidationPlugin from "@pothos/plugin-validation";
import { getTableConfig } from "drizzle-orm/pg-core";
import { DateTimeResolver } from "graphql-scalars";
import { db } from "@/lib/db";
import type {
  ArticleModel,
  MediaModel,
  RoleValue,
  UserModel,
} from "@/lib/db/schema";
import { relations } from "@/lib/db/schema";

type DrizzleRelations = typeof relations;

export interface CurrentUser {
  id: string;
  email: string;
  role: RoleValue;
}

export const builder = new SchemaBuilder<{
  Defaults: "v3";
  Objects: {
    User: UserModel;
    Media: MediaModel;
    Article: ArticleModel;
  };
  AuthScopes: {
    public: boolean;
    authenticated: boolean;
    writer: boolean;
    admin: boolean;
  };
  DrizzleRelations: DrizzleRelations;
  Scalars: {
    ID: {
      Output: string;
      Input: string;
    };
    DateTime: {
      Output: Date;
      Input: Date;
    };
  };
  Context: {
    user?: CurrentUser | null;
  };
}>({
  defaults: "v3",
  plugins: [DrizzlePlugin, ValidationPlugin, ScopeAuthPlugin],
  drizzle: {
    client: db,
    getTableConfig,
    relations,
  },
  authScopes: (context) => ({
    public: true,
    authenticated: !!context.user,
    writer: context.user?.role === "WRITER" || context.user?.role === "ADMIN",
    admin: context.user?.role === "ADMIN",
  }),
});

builder.queryType();
builder.mutationType();

builder.addScalarType("DateTime", DateTimeResolver);
