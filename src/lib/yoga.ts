import { useCookies } from "@whatwg-node/server-plugin-cookies";
import { eq } from "drizzle-orm";
import { createYoga } from "graphql-yoga";
import { users } from "@/db/schema";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { ADMIN_EMAIL } from "@/lib/env";
import { schema } from "@/lib/schema";

export const yoga = createYoga({
  schema,
  // biome-ignore lint/correctness/useHookAtTopLevel: This is the correct way to use plugins in Yoga.
  plugins: [useCookies()],
  graphqlEndpoint: "/api/graphql",
  fetchAPI: {
    Response,
  },
  context: async ({ request }) => {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

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

      user = {
        ...user,
        role: "ADMIN",
      };
    }

    return {
      user,
      request,
    };
  },
});
