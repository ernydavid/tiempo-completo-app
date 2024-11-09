import { Frown } from 'lucide-react'
import Link from 'next/link'

export default function ErrorPage () {
  return (
    <div className='text-center grid space-y-3 place-content-center place-items-center'>
      <Frown className='w-5 h-5' />
      <p>Algo ha ocurrido.</p>
      <Link
        href='/'
        className='text-muted hover:text-foreground button-secondary-link text-sm'
      >
        Ir a inicio.
      </Link>
    </div>
  )
}
