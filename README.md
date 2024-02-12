# emojis-todo

A simple app to demonstate the ease of fetching and mutating data with Next.js App Router, RSC, and Server Actions.

## Deploying

- Import this repo
- Create a Postgres (Neon) db and attach it to your Vercel project

## Developing

- Run `vc link` - make sure your Vercel project has a Postgres db attached
- Run `vc env pull` to populate `.env.local`
- Run `drizzle-kit push:pg` to create the db schema
- Run `next dev`
