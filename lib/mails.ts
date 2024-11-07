import { Resend } from 'resend'
import { MagicLinkEmail } from './emails/magic-link-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationRequestEmail = async ({ email, subject, url } : {
  email: string
  subject: string
  url: string
}) => {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject,
    react: MagicLinkEmail({ url })
  })
}
