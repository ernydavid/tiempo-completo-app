import { type DefaultSession } from 'next-auth'

export type UserRole = 'user' | 'admin'

export type ExtendedUser = DefaultSession['user'] & {
  role: UserRole
  isTwoFactorEnabled: boolean
  isOAuth: boolean
}
declare module 'next-auth' {
  export interface Session {
    user: ExtendedUser
  }
}
