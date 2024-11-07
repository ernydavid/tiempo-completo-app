import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SignInPageErrorParam =
  'Signin'
  | 'OAuthSignin'
  | 'OAuthCallbackError'
  | 'OAuthCreateAccount'
  | 'EmailCreateAccount'
  | 'Callback'
  | 'OAuthAccountNotLinked'
  | 'EmailSignin'
  | 'CredentialsSignin'
  | 'SessionRequired'

export function getErrorMessage (errorType: SignInPageErrorParam) {
  switch (errorType) {
    case 'Signin':
      return 'Hubo un error al iniciar sesión. Por favor, intenta nuevamente.'
    case 'OAuthSignin':
      return 'No se pudo iniciar sesión con el proveedor seleccionado. Verifica tu cuenta o intenta con otro método.'
    case 'OAuthCallbackError':
      return 'Ocurrió un problema al conectar con el proveedor de autenticación. Intenta de nuevo.'
    case 'OAuthCreateAccount':
      return 'No se pudo crear la cuenta con el proveedor seleccionado. Intenta con otro método o verifica tu cuenta.'
    case 'EmailCreateAccount':
      return 'No se pudo crear la cuenta con el enlace de correo electrónico. Verifica tu correo o intenta nuevamente.'
    case 'Callback':
      return 'Ocurrió un error en la autenticación. Intenta de nuevo.'
    case 'OAuthAccountNotLinked':
      return 'Esta cuenta ya está registrada con otro método de autenticación. Inicia sesión con el método original.'
    case 'EmailSignin':
      return 'No se pudo enviar el enlace de inicio de sesión por correo. Verifica tu correo e intenta de nuevo.'
    case 'CredentialsSignin':
      return 'Las credenciales proporcionadas no son correctas. Por favor, verifica e intenta nuevamente.'
    case 'SessionRequired':
      return 'Inicia sesión para acceder a esta página.'
    default:
      return 'Ocurrió un error inesperado. Por favor, intenta nuevamente.'
  }
}
