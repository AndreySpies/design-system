import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator, CheckboxBox } from './styles'
import { Text } from '../Text'
import { InputBox } from '../InputBox'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  label?: string
  error?: string
  hint?: string
  required?: boolean
}

export function Checkbox({
  label,
  error,
  hint,
  required,
  ...props
}: CheckboxProps) {
  return (
    <InputBox error={error} hint={hint}>
      <CheckboxBox>
        <CheckboxContainer {...props} errored={!!error}>
          <CheckboxIndicator asChild>
            <Check weight="bold" />
          </CheckboxIndicator>
        </CheckboxContainer>
        <>
          {!!label && (
            <Text as="span" size="sm">
              {label}
            </Text>
          )}
          {required && (
            <Text as="span" size="sm" variant="danger">
              *
            </Text>
          )}
        </>
      </CheckboxBox>
    </InputBox>
  )
}

Checkbox.displayName = 'Checkbox'
