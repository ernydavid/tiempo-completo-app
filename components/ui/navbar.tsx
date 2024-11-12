'use client'

import { cn } from '@/lib/utils'
import { use, useState } from 'react'
import Link from 'next/link'
import { Session } from 'next-auth'
import { AuthLinks } from '../auth/auth-links'
import { PublicLinks } from '../auth/public-links'
import { AlertCircle } from 'lucide-react'
import { SignOutButton } from '../auth/signout-button'

interface Props {
  userPromise: Promise<Session | null>
}

const publicRoutes = [
  {
    id: 1,
    label: 'Como funciona',
    href: '/how-works'
  },
  {
    id: 2,
    label: 'Empieza Ahora',
    href: '/auth/login'
  }
]

export function Navbar ({ userPromise }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const session = use(userPromise)
  const user = session?.user
  const notCompleteUser = user && !session?.user.name

  return (
    <>
      <header className='flex flex-col w-full text-white fixed top-0 left-0 z-50'>
        <nav className='w-full px-4 h-14 flex justify-between items-center gap-3 bg-secondary'>
          <Link
            href='/'
            className='flex items-center gap-2'
          >
            <div className='h-10 w-10 bg-primary text-white flex items-center justify-center'>
              <span className='font-medium tracking-tighter'>JW</span>
            </div>
            <span className='tracking-tighter font-medium text-lg'>Servicio</span>
          </Link>
          <button
            className='group h-10 w-10 md:hidden flex'
            data-open={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className='w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit before:content-[""] before:block group-hover:opacity-80 before:h-px before:w-7 before:bg-white before:rounded-full before:-translate-y-1 group-data-[open="true"]:before:translate-y-px group-data-[open="true"]:before:rotate-45 before:transition-transform before:duration-150 after:content-[""] after:block after:h-px  after:w-7 after:bg-white after:rounded-full after:translate-y-1 group-data-[open="true"]:after:translate-y-0 group-data-[open="true"]:after:-rotate-45 after:transition-transform after:duration-150' />
          </button>
          <div className='hidden md:flex items-center gap-3'>
            {session
              ? (
                <>
                  <Link
                    className='button-primary-link'
                    href='/dashboard'
                  >
                    Dashboard
                  </Link>
                  <SignOutButton />
                </>
                )
              : (
                  publicRoutes.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={item.id === 1 ? 'link-secondary-dark' : 'button-primary-link'}
                    >
                      {item.label}
                    </Link>
                  ))
                )}
          </div>
        </nav>
        {notCompleteUser && (
          <div className='w-full h-9 bg-foreground/50 text-error flex items-center justify-between gap-2 px-4'>
            <div className='flex items-center gap-2'>
              <AlertCircle className='w-3 h-3' />
              Completa tu perfil.
            </div>
            <Link
              href='/dashboard/settings'
              className='text-sm px-3 h-7 text-center flex items-center hover:text-background'
            >
              Ir a Ajustes
            </Link>
          </div>
        )}
      </header>
      <div
        className={cn(
          'w-full md:max-w-sm h-0 overflow-hidden flex flex-col bg-background/90 text-foreground backdrop-blur-md absolute top-14 left-0 md:left-auto md:right-0 z-50',
          isOpen ? 'h-[calc(100dvh-56px)] transition-all ease-in-out duration-300' : 'transition-all ease-in-out duration-300'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!session
          ? (
            <PublicLinks />
            )
          : (
            <AuthLinks user={user} />
            )}
      </div>
    </>
  )
}
