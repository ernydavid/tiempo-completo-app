import React, { ReactNode } from 'react'

export default function DashboardLayout ({ children }: Readonly<{
  children: ReactNode
}>) {
  return (
    <div className='min-h-[calc(100dvh-126px)] flex flex-col gap-4 items-center justify-center'>
      {children}
    </div>
  )
}
