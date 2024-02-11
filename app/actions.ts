"use server";
import { db, todosTable } from "./db";
import { redirect } from "next/navigation";

export async function submit(form: FormData) {
  const text = form.get("text") + "";
  if (!/^[\p{Emoji}]+$/u.test(text)) return;
  await db.insert(todosTable).values({ text });
  redirect("/");
}
