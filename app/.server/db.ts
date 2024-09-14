import type { AppLoadContext } from "@remix-run/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export const getDatabase = (context: AppLoadContext) =>
  drizzle(context.cloudflare.env.DB, { schema });
