'use client'

import { Text } from '../Text'
import { InputContainer } from './styles'

export interface InputProps {
  label?: string
  children: React.ReactElement
  error?: string
}

export function InputBox({ label, error, children }: InputProps) {
  return (
    <InputContainer>
      {!!label && <Text size={'sm'}>{label}</Text>}
      {children}
      {!!error && (
        <Text size="xs" variant="danger">
          {error}
        </Text>
      )}
    </InputContainer>
  )
}

InputBox.displayName = 'InputBox'
