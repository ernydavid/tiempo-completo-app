import Image from 'next/image'

export function HeroSection () {
  return (
    <div>
      <Image
        width={360}
        height={360}
        className='w-full max-w-sm mx-auto dark-image'
        src='/assets/hero-dark.svg'
        priority
        alt='Hero Image Dark'
      />
      <Image
        width={360}
        height={360}
        priority
        className='w-full max-w-sm mx-auto block dark:hidden'
        src='/assets/hero-light.svg'
        alt='Hero Image'
      />
    </div>
  )
}
