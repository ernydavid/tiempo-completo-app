import { apiProtectedRoutes, authRoutes, DEFAULT_LOGIN_REDIRECT, protectedRoutePrefix } from '@/routes'
import { NextResponse } from 'next/server'
// import NextAuth from 'next-auth'
// import authConfig from './auth.config'
import { auth } from '@/auth'
// const { auth } = NextAuth(authConfig)
// export default auth((req) => {
//   const { nextUrl } = req
//   const isLoggedIn = !!req.auth
//   const isProtectedRoute = nextUrl.pathname.startsWith(protectedRoutePrefix)
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname)
//   const isApiRoute = apiProtectedRoutes.includes(nextUrl.pathname)

//   if (isApiRoute) {
//     return Response.redirect(nextUrl.host)
//   }

//   if (isLoggedIn && isAuthRoute) {
//     return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
//   }

//   if (!isLoggedIn && isProtectedRoute) {
//     const callbackUrl = `${nextUrl.origin}/auth/login?callbackUrl=${nextUrl.pathname}`

//     return Response.redirect(new URL(callbackUrl))
//   }
// })

export default auth((request) => {
  const { nextUrl } = request
  const isLoggedIn = !!request.auth
  const isProtectedRoute = nextUrl.pathname.startsWith(protectedRoutePrefix)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isApiRoute = apiProtectedRoutes.includes(nextUrl.pathname)

  if (isApiRoute) {
    return NextResponse.redirect(new URL(nextUrl.origin, nextUrl))
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  if (!isLoggedIn && isProtectedRoute) {
    const callbackUrl = `${nextUrl.origin}/auth/login?callbackUrl=${nextUrl.pathname}`

    return Response.redirect(new URL(callbackUrl))
  }
})

export const config = {
  matcher: ['/api/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)']
}
