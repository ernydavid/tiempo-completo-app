import { FormError } from '@/components/auth/form-error'
import { LoginForm } from '@/components/auth/login-form'
import { getErrorMessage, SignInPageErrorParam } from '@/lib/utils'

type SearchParams = Promise<{
  callbackUrl?: string
  error?: SignInPageErrorParam
}>

export default async function LoginPage ({ searchParams }: {
  searchParams: SearchParams
}) {
  const { callbackUrl, error } = await searchParams

  return (
    <div className='w-full max-w-md grid gap-6'>
      <LoginForm callbackUrl={callbackUrl} />
      {error && (
        <FormError error={getErrorMessage(error)} />
      )}
    </div>
  )
}
