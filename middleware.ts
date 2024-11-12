import { apiProtectedRoutes, authRoutes, DEFAULT_LOGIN_REDIRECT, protectedRoutePrefix } from '@/routes'
import { auth } from '@/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

export async function middleware (request: NextRequest) {
  const { nextUrl } = request
  const session = await auth()
  const isProtectedRoute = nextUrl.pathname.startsWith(protectedRoutePrefix)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isApiRoute = apiProtectedRoutes.includes(nextUrl.pathname)

  if (isApiRoute) {
    return NextResponse.redirect(new URL(nextUrl.origin, nextUrl))
  }

  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  if (!session && isProtectedRoute) {
    const callbackUrl = `${nextUrl.origin}/auth/login?callbackUrl=${nextUrl.pathname}`

    return NextResponse.redirect(new URL(callbackUrl))
  }
}
