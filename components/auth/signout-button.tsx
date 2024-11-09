import { logout } from '@/lib/auth'

export function SignOutButton () {
  return (
    <form action={logout}>
      <button
        className='secondary-button'
        type='submit'
      >
        Log Out
      </button>
    </form>
  )
}
