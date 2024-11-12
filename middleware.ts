import { authRoutes, DEFAULT_LOGIN_REDIRECT, protectedRoutePrefix } from '@/routes'
import { auth } from '@/auth'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const isProtectedRoute = nextUrl.pathname.startsWith(protectedRoutePrefix)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isLoggedIn && isAuthRoute) {
    return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
  }

  if (!isLoggedIn && isProtectedRoute) {
    const callbackUrl = `${nextUrl.origin}/auth/login?callbackUrl=${nextUrl.pathname}`

    return Response.redirect(new URL(callbackUrl))
  }
})

// export { auth as middleware } from '@/auth'
