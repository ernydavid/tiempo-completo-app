import NextAuth from 'next-auth'
import PostgresAdapter from '@auth/pg-adapter'
import { Pool } from '@neondatabase/serverless'
import { UserRole } from './next-auth'
import { getAccountByUserId, getUserById, updateEmailVerifiedByUserId } from '@/lib/auth'
import authConfig from './auth.config'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool),
  pages: {
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    signIn: '/auth/login'
  },
  events: {
    async linkAccount ({ user }) {
      await updateEmailVerifiedByUserId(user?.id as string)
    }
  },
  callbacks: {
    async session ({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
        session.user.isOAuth = token.isOAuth as boolean
      }

      return session
    },
    async jwt ({ token }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      const existingAccount = await getAccountByUserId(
        existingUser.id
      )

      token.isOAuth = !!existingAccount
      token.name = existingUser.name
      token.email = existingUser.email
      token.role = existingUser.role
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled

      return token
    }

  },
  session: { strategy: 'jwt' },
  ...authConfig
})
