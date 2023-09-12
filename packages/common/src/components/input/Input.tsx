import React from 'react'
import { Input } from '@chakra-ui/react'
import { InputProps } from './Input.types'

const BaseInput: React.FC<InputProps> = ({ placeholder, value, onChange, disabled, inputSize, variant }) => {
  const size = inputSize === 'normal' ? 'sm' : 'lg'
  return (
    <>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        size={size}
        variant={variant}
      />
    </>
  )
}

export default BaseInput
