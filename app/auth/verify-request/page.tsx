import { MailCheck } from 'lucide-react'
import React from 'react'

type SearchParams = Promise<{
  provider?: string
  type?: string
}>

export default async function VerifyPage (props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const { type } = searchParams

  if (type === 'email') {
    return (
      <div className='text-center grid place-content-center place-items-center'>
        <MailCheck className='w-6 h-6' />
        <p>Link de acceso enviado.</p>
        <p className='text-muted'>Comprueba tu email.</p>
      </div>
    )
  }
}
