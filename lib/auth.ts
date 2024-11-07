'use server'

import { signIn } from '@/auth'
import { db } from '@/db'
import { accounts, users } from '@/db/schema/users'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { eq } from 'drizzle-orm'
import { OAuthProviderType } from 'next-auth/providers'
import { z } from 'zod'

export async function getUserById (id: string) {
  const data = await db.select()
    .from(users)
    .where(eq(users.id, id))

  return data[0]
}

export async function getUserByEmail (email: string) {
  const data = await db.select()
    .from(users)
    .where(eq(users.email, email))

  return data[0]
}

export async function getAccountByUserId (userId: string) {
  const account = await db.select()
    .from(accounts)
    .where(eq(accounts.userId, userId))

  return account[0]
}

export async function updateUserByUserEmail ({ email, name, image }: {
  email: string
  name?: string
  image?: string
}) {
  const updatedUser = await db.update(users).set({
    name: name || null,
    image: image || null
  }).where(eq(users.email, email))

  return updatedUser
}

export async function insertAccount ({
  provider,
  providerAccountId,
  type,
  accessToken,
  expiresAt,
  idToken,
  scope,
  tokenType,
  userId
}: {
  provider: string
  providerAccountId: string
    type: string
    accessToken: string
    expiresAt: number
    idToken: string
    scope: string
    tokenType: string
    userId: string
}) {
  await db.insert(accounts).values({
    provider,
    providerAccountId,
    type,
    access_token: accessToken,
    expires_at: expiresAt,
    id_token: idToken,
    scope,
    token_type: tokenType,
    userId
  })
}

export async function updateEmailVerifiedByUserId (userId: string) {
  try {
    await db.update(users)
      .set({
        emailVerified: new Date()
      })
      .where(eq(users.id, userId))
  } catch (error) {
    return {
      error: `Error actualizando usuario. Detalles: ${error}`
    }
  }
}

export async function insertNewUser ({ email, password, name }: {
  email: string
  password: string
  name: string
}) {
  try {
    const response = await db.insert(users)
      .values({
        email,
        password,
        name
      })
      .returning()

    return response
  } catch (error) {
    return {
      error: `Error creando nuevo usuario. Detalles: ${error}`
    }
  }
}

// action state to auth forms
export type ActionState = {
  error?: string
  success?: string
  [key: string]: any
}

const FormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }).trim()
})

// login with provider 'resend' and 'google'
export async function login (prevState: ActionState, formData: FormData) {
  const rawData = Object.fromEntries(formData)

  const { email, provider, callbackUrl } = rawData
  const validateEmail = FormSchema.safeParse(rawData)

  if (provider === 'resend' && !validateEmail.success) {
    return {
      error: validateEmail.error.flatten().fieldErrors.email
    }
  }

  const redirectUrl = callbackUrl === '' || callbackUrl === undefined
    ? DEFAULT_LOGIN_REDIRECT
    : callbackUrl

  const authOptions = provider === 'google'
    ? { redirectTo: redirectUrl as string }
    : {
        email,
        redirectTo: redirectUrl as string
      }

  await signIn(provider as OAuthProviderType, authOptions)
}
