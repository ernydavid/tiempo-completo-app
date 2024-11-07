import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './db/schema',
  dbCredentials: {
    url: process.env.DATABASE_URL!
  },
  out: './drizzle'
})