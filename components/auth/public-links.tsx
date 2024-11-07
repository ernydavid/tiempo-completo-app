import Link from 'next/link'

const routes = [
  {
    id: 2,
    slug: '/auth/login',
    label: 'Iniciar Sesión'
  },
  {
    id: 3,
    slug: '/how-works',
    label: 'Cómo Funciona'
  }
]

export function PublicLinks () {
  return (
    <div
      className='flex flex-grow flex-col justify-between space-y-3 px-4 py-8 text-lg tracking-tight font-medium md:border-l md:border-l-secondary dark:md:border-l-muted/20'
    >
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

      <Link
        className='button-primary-link'
        href='/auth/login'
      >
        Empieza Ahora
      </Link>
    </div>
  )
}
