import { Text, TextProps } from '../Text'
import { InputContainer, TextBox } from './styles'

export interface InputProps {
  label?: string
  children: React.ReactElement
  error?: string
  hint?: string
  required?: boolean
  labelProps?: Omit<TextProps, 'children'>
  errorProps?: Omit<TextProps, 'children'>
  hintProps?: Omit<TextProps, 'children'>
  requiredAsteriskProps?: Omit<TextProps, 'children'>
}

export function InputBox({
  label,
  error,
  hint,
  required,
  children,
  labelProps,
  errorProps,
  hintProps,
  requiredAsteriskProps,
}: InputProps) {
  return (
    <InputContainer>
      <div>
        {!!label && (
          <Text as="span" size={'sm'} {...labelProps}>
            {label}
          </Text>
        )}
        {required && (
          <Text as="span" size={'sm'} variant="danger" {...requiredAsteriskProps}>
            &nbsp;*
          </Text>
        )}
      </div>
      {children}
      <TextBox>
        {!!error && (
          <Text size="xs" variant="danger" {...errorProps}>
            {error}
          </Text>
        )}
        {!error && hint && (
          <Text size="xs" variant="gray200" {...hintProps}>
            {hint}
          </Text>
        )}
      </TextBox>
    </InputContainer>
  )
}

InputBox.displayName = 'InputBox'
