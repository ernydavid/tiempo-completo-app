import { auth } from '@/auth'
import { UserInfoCard } from '@/components/ui/dashboard/user-info'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

export default async function DashboardLayout ({ children }: Readonly<{
  children: ReactNode
}>) {
  const session = await auth()

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className='w-full min-h-[calc(100dvh-64px)] flex flex-col md:flex-row gap-8'>
      <div>
        <UserInfoCard />
      </div>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}
