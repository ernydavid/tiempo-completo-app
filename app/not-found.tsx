import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound () {
  return (
    <div className='w-full min-h-[calc(100dvh-128px)] grid place-content-center place-items-center gap-2 tracking-tighter'>
      <div className='text-center'>
        <p className='text-lg leading-none'>404</p>
        <p className='text-muted'>Opps... Content not found.</p>
      </div>
      <Link
        className='button-secondary-link text-sm'
        href='/'
      >
        <Home className='w-3 h-3 mr-2' />
        Inicio
      </Link>
    </div>
  )
}
