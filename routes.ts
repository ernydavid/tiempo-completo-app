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
 * las urls que se usan para autenticacion
 * estas redirigiran al usuario logueado a /dashboard
 * @type {string}
 */
export const protectedAdminRoutePrefix = '/admin'
