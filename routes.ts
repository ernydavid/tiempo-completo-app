/**
 * La url a redireccionar por defecto
 * despues de hacer login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/dashboard'

/**
 * las urls que se usan para autenticacion
 * estas redirigiran al usuario logueado a /dashboard
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/error'
]

/**
 * las urls que se usan para autenticacion
 * estas redirigiran al usuario logueado a /dashboard
 * @type {string}
 */
export const protectedRoutePrefix = '/dashboard'

/**
 * El prefijo de las API de autenticacion
 * las rutas que empiecen con este prefijo seran
 * usadas por la API de autenticacion
 * @type {string}
 */
export const apiProtectedRoutes = [
  '/api/auth',
  '/api/auth/providers'
]
