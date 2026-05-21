import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { authSchema } from "@/db/schema";
import { db } from "@/lib/db";
import { BETTER_AUTH_SECRET, BETTER_AUTH_URL } from "@/lib/env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authSchema,
  }),
  secret: BETTER_AUTH_SECRET,
  baseURL: BETTER_AUTH_URL,
  basePath: "/api/auth",
  trustedOrigins: [BETTER_AUTH_URL],
  user: {
    modelName: "User",
    additionalFields: {
      role: {
        type: "string",
        enumValues: ["ADMIN", "WRITER"],
        defaultValue: "WRITER",
        input: false,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 8,
    maxPasswordLength: 128,
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 15 * 60,
    },
  },
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
});

export type AuthType = {
  user: typeof auth.$Infer.Session.user | null;
  session: typeof auth.$Infer.Session | null;
};
