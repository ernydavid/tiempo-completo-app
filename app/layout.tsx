import type { Metadata } from 'next'
import './globals.css'
import { geistSans } from '@/components/ui/fonts'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Navbar } from '@/components/ui/navbar'
import { auth } from '@/auth'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export const metadata: Metadata = {
  title: 'Tiempo Completo App',
  description: 'Una App creada para los Testigos de Jehová.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userPromise = auth()
  return (

    <html
      lang='en'
      suppressHydrationWarning
    >

      <body
        className={`${geistSans.className} tracking-tight antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
        >
          <div className='min-h-dvh px-4 flex flex-col relative'>
            <Navbar userPromise={userPromise} />
            <div className='flex-grow pt-20'>
              {children}
            </div>
            <div className='h-12 flex items-center md:justify-between justify-end gap-3'>
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
