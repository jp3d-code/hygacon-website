import { useCookies } from "@whatwg-node/server-plugin-cookies";
import { eq } from "drizzle-orm";
import { createYoga } from "graphql-yoga";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { ADMIN_EMAIL } from "@/lib/env";
import { schema } from "@/lib/schema";

export const yoga = createYoga({
  schema,
  plugins: [useCookies()],
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
  context: async ({ request }) => {
    const session = await auth.api.getSession({ headers: request.headers });
    let user = session?.user || null;

    if (
      user &&
      ADMIN_EMAIL &&
      user.email === ADMIN_EMAIL &&
      user.role !== "ADMIN"
    ) {
      await db
        .update(users)
        .set({ role: "ADMIN" })
        .where(eq(users.id, user.id));
      user = { ...user, role: "ADMIN" };
    }

    return {
      user,
    };
  },
});
