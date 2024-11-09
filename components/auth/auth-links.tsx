import { ExtendedUser } from '@/next-auth'
import { User2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SignOutButton } from './signout-button'

const routes = [
  {
    id: 1,
    slug: '/dashboard',
    label: 'Dashboard'
  },
  {
    id: 2,
    slug: '/dashboard/send',
    label: 'Enviar Informe'
  },
  {
    id: 3,
    slug: '/dashboard/settings',
    label: 'Ajustes'
  }
]

interface Props {
  user?: ExtendedUser
}

export function AuthLinks ({ user }: Props) {
  return (
    <div
      className='flex flex-grow flex-col justify-between space-y-3 px-4 py-8 text-lg tracking-tight font-medium md:border-l md:border-l-secondary dark:md:border-l-muted/20'
    >
      <div className='flex flex-col space-y-6'>
        <div className='space-y-3'>
          <div className='w-12 h-12'>
            {user?.image
              ? (
                <Image
                  width={48}
                  height={48}
                  loading='lazy'
                  src={user?.image}
                  alt='Profile photo'
                  className='w-12 h-12'
                />)
              : (
                <div className='w-12 h-12 bg-primary flex items-center justify-center text-center text-white'>
                  <User2 className='w-5 h-5' />
                </div>
                )}
          </div>
          <div>
            <p className='text-2xl font-medium tracking-tighter leading-none'>{user?.name}</p>
            <p className='text-base text-muted'>{user?.email}</p>
          </div>
        </div>
        <div className='flex flex-col space-y-3'>
          {routes.map((item) => (
            <Link
              key={item.id}
              href={item.slug}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <SignOutButton />
    </div>
  )
}
