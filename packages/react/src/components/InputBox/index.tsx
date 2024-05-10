import { Text } from '../Text'
import { InputContainer, TextBox } from './styles'

export interface InputProps {
  label?: string
  children: React.ReactElement
  error?: string
  hint?: string
  required?: boolean
}

export function InputBox({
  label,
  error,
  hint,
  required,
  children,
}: InputProps) {
  return (
    <InputContainer>
      <div>
        {!!label && (
          <Text as="span" size={'sm'}>
            {label}
          </Text>
        )}
        {required && (
          <Text as="span" size={'sm'} variant="danger">
            &nbsp;*
          </Text>
        )}
      </div>
      {children}
      <TextBox>
        {!!error && (
          <Text size="xs" variant="danger">
            {error}
          </Text>
        )}
        {!error && hint && (
          <Text size="xs" variant="gray200">
            {hint}
          </Text>
        )}
      </TextBox>
    </InputContainer>
  )
}

InputBox.displayName = 'InputBox'
