import { UserInfoCard } from '@/components/ui/dashboard/user-info'
import React, { ReactNode } from 'react'

export default function DashboardLayout ({ children }: Readonly<{
  children: ReactNode
}>) {
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
