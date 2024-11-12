import { auth } from '@/auth'

export async function UserInfoCard () {
  const session = await auth()
  const user = session?.user

  if (!user) {
    return (
      <div>
        <p>Ooppss... User not found!</p>
      </div>
    )
  }

  return (
    <div className='grid gap-6 place-content-start'>
      <div className='flex flex-col items-start'>
        <p className='text-3xl'>{user?.name}</p>
        <p>{user?.email}</p>
        <span className='primary-button flex justify-center items-center text-center px-2'>Precursor Regular</span>
      </div>
      <div className='flex flex-col items-start'>
        <p>Periodo de servicio:</p>
        <p className='text-3xl bg-foreground text-background text-center px-2'>{`${new Date().getFullYear()}-${new Date().getFullYear() + 1}`}</p>
      </div>
    </div>
  )
}
