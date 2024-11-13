import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

export default async function AuthLayout ({ children }: Readonly<{
  children: ReactNode
}>) {
  const session = await auth()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className='w-full min-h-[calc(100dvh-132px)] flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}
