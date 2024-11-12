import { auth } from '@/auth'
import { HeroSection } from '@/components/ui/hero/hero-section'
import Link from 'next/link'

export default async function Home () {
  const session = await auth()

  return (
    <div className='w-full flex flex-col gap-6 md:text-center'>
      <HeroSection />
      <div className='space-y-3'>
        <h1 className='font-medium tracking-tighter'>
          Reporte  completo de tu servicio
        </h1>
        <p
          className='text-muted'
        >
          Lleva un control de tus horas, publicaciones,
          revisitas y estudios con esta aplicación web
          sencilla e intuitiva.
        </p>
        {!session
          ? (
            <div className='mt-5 flex justify-start md:justify-center items-center gap-4'>
              <Link
                href='/auth/login'
                className='button-primary-link'
              >
                Empieza Ahora
              </Link>
              <Link
                href='/how-works'
                className='button-secondary-link'
              >
                Cómo Funciona
              </Link>
            </div>
            )
          : (
            <div className='mt-5 flex justify-start md:justify-center items-center gap-4'>
              <Link
                href='/dashboard'
                className='button-primary-link'
              >
                Entrar Ahora
              </Link>
            </div>
            )}
      </div>
    </div>
  )
}
