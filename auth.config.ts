import { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'
import { sendVerificationRequestEmail } from './lib/mails'

export default {
  providers: [
    Google({
      authorization: {
        params: {
          prompt: 'consent'
        }
      }
    }),
    Resend({
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        try {
          const { host } = new URL(url)
          await sendVerificationRequestEmail({
            email,
            subject: `Inicia session en ${host}`,
            url
          })
        } catch (error) {
          throw new Error(`Error al enviar email. Error: ${error}`)
        }
      }
    })
  ]
} satisfies NextAuthConfig
