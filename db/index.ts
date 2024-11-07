import { drizzle } from 'drizzle-orm/neon-serverless'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL must be a Neon postgres connection string')
}

export const db = drizzle(process.env.DATABASE_URL)
