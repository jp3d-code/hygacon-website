import "@/lib/schema/pagination";
import "@/lib/schema/user";
import "@/lib/schema/media";
import "@/lib/schema/article";
import { builder } from "@/lib/schema/builder";

export const schema = builder.toSchema();
