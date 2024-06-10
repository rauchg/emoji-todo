import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/db.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
});
