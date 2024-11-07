import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

interface InputProps {
  label?: string
  className?: string
  error?: string
}

export function Input (
  props: InputHTMLAttributes<HTMLInputElement> & InputProps
) {
  return (
    <div className='flex flex-col space-y-1'>
      <label
        className={cn(
          props.error && 'text-error'
        )}
        htmlFor={props?.label}
      >
        {props.label}
      </label>
      <input
        {...props}
        id={props.label}
        className={cn(
          props.error && 'bg-error/10'
        )}
      />
      {props.error && <span className='text-error text-sm'>{props.error}</span>}
    </div>
  )
}
