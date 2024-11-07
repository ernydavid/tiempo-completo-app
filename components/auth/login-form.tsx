'use client'

import { GoogleIcon } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { ActionState, login } from '@/lib/auth'
import { useActionState } from 'react'

interface Props {
  callbackUrl?: string
}

export function LoginForm ({ callbackUrl }: Props) {
  const [state, action] = useActionState<ActionState, FormData>(login, { error: '' })

  return (
    <div className='w-full max-w-md mx-auto space-y-4'>
      <h1>
        Iniciar Sesión
      </h1>
      <form
        className='w-full grid gap-3'
        action={action}
      >
        <input
          name='callbackUrl'
          value={callbackUrl}
          type='hidden'
        />
        <input
          name='provider'
          value='resend'
          type='hidden'
        />
        <Input
          className='w-full'
          label='Email'
          name='email'
          placeholder='Ingresa tu email'
          type='text'
          error={state?.error || undefined}
        />
        <button className='primary-button'>
          Iniciar con enlace mágico
        </button>
      </form>
      <p className='text-center text-sm'>Ó:</p>
      <form
        className='w-full'
        action={action}
      >
        <input
          name='provider'
          value='google'
          type='hidden'
        />
        <input
          name='callbackUrl'
          value={callbackUrl}
          type='hidden'
        />
        <button
          type='submit'
          className='w-full secondary-button flex items-center justify-center gap-2'
        >
          <GoogleIcon className='w-4 h-4' />
          Continuar con Google
        </button>
      </form>
    </div>
  )
}
