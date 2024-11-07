import { signIn, signOut } from '@/auth'
import { Input } from '../ui/input'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { GoogleIcon } from '@/components/ui/icons'

export async function SignInGoogle ({ callbackUrl }: {
  callbackUrl?: string
}) {
  return (
    <form action={async () => {
      'use server'
      await signIn('google', { redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT })
    }}
    >
      <button
        type='submit'
        className='secondary-button w-full flex items-center gap-2 justify-center'
      >
        <GoogleIcon className='w-4 h-4' />
        Iniciar sesión con Google
      </button>
    </form>

  )
}

export function SignOutButton () {
  return (
    <form action={async () => {
      'use server'
      await signOut()
    }}
    >
      <button
        type='submit'
      >
        Log Out
      </button>
    </form>
  )
}

export function SignInWithMagicLink ({ callbackUrl }: {
  callbackUrl?: string
}) {
  async function loginWithMagicLink (formData: FormData) {
    'use server'
    const email = formData.get('email')?.toString()
    await signIn('resend', {
      email,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <form
      className='space-y-2'
      action={loginWithMagicLink}
    >
      <Input
        type='email'
        name='email'
        placeholder='Ingresa tu email'
        required
      />
      <button
        className='primary-button w-full'
        type='submit'
      >
        Iniciar sesión con link mágico
      </button>
    </form>
  )
}
