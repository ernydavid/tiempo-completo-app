'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export function GoBackButton () {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <button
      className='secondary-button flex items-center gap-2'
      onClick={handleGoBack}
    >
      <ChevronLeft className='w-4 h-4' />
      <p className='text-sm'>Atras</p>
    </button>
  )
}
