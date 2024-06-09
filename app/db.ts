import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql);

export const todosTable = pgTable("todos", {
  id: serial("id").primaryKey(),
  text: varchar("text", { length: 10 }),
});
