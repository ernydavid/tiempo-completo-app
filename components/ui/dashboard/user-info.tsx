import { auth } from '@/auth'
import { Edit } from 'lucide-react'

export async function UserInfoCard () {
  const session = await auth()
  const user = session?.user

  if (!user) {
    return (
      <div className=' grid gap-6'>
        <div className='w-12 h-12 bg-muted animate-pulse'>
          <div className='w-full h-9 bg-muted animate-pulse' />
        </div>
      </div>
    )
  }

  return (
    <div className='w-full md:max-w-[260px] grid gap-6 place-content-start'>
      <div className='flex flex-col items-start space-y-1'>
        <p className='text-3xl tracking-tighter font-medium text-wrap leading-none'>{user?.name} Macea</p>
        <div className='flex gap-3'>
          <span className='primary-button flex justify-center items-center px-2 py-1 leading-tight'>"Y las cosas anteriores no seran recordadas ni subiran al corazón". Isaias 65: 17</span>
          <button className='flex items-center justify-center secondary-button'>
            <Edit className='w-4 h-4' />
          </button>
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <p>Periodo de servicio:</p>
        <p className='text-3xl bg-foreground text-background text-center px-2'>{`${new Date().getFullYear()}-${new Date().getFullYear() + 1}`}</p>
      </div>
    </div>
  )
}
