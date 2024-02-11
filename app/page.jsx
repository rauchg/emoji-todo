import { db, todosTable } from "./db";
import { submit } from "./actions";
import { sql } from "drizzle-orm";

export default async function Home({ searchParams }) {
  const todos = await db
    .select()
    .from(todosTable)
    .limit(20)
    .orderBy(searchParams.asc || sql`${todosTable.id} DESC`);

  return (
    <main>
      <h1>Emoji TODO</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <form action={submit} key={todos[0]?.id}>
        <input
          type="text"
          placeholder="🫡 (only emojis allowed)"
          pattern="^[\p{Emoji}]+$"
          name="text"
          autoFocus
          maxLength="10"
          required
        />
        <button>✉️</button>
      </form>
    </main>
  );
}
