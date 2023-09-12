import { ChangeEventHandler, InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string
  label?: string
  error?: string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  inputSize?: 'normal' | 'wide'
  variant?: 'outline' | 'filled' | 'flushed' | 'unstyled'
  color?: 'primary' | 'Secondary' | string
  onChange?: ChangeEventHandler<HTMLInputElement>
}
