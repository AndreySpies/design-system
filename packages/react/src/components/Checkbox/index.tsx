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
  labelProps?: Omit<ComponentProps<typeof Text>, 'children'>
  errorProps?: Omit<ComponentProps<typeof Text>, 'children'>
  hintProps?: Omit<ComponentProps<typeof Text>, 'children'>
  requiredAsteriskProps?: Omit<ComponentProps<typeof Text>, 'children'>
}

export function Checkbox({
  label,
  error,
  hint,
  required,
  labelProps,
  errorProps,
  hintProps,
  requiredAsteriskProps,
  ...props
}: CheckboxProps) {
  return (
    <InputBox error={error} hint={hint} errorProps={errorProps} hintProps={hintProps}>
      <CheckboxBox>
        <CheckboxContainer {...props} errored={!!error}>
          <CheckboxIndicator asChild>
            <Check weight="bold" />
          </CheckboxIndicator>
        </CheckboxContainer>
        <>
          {!!label && (
            <Text as="span" size="sm" {...labelProps}>
              {label}
            </Text>
          )}
          {required && (
            <Text as="span" size="sm" variant="danger" {...requiredAsteriskProps}>
              *
            </Text>
          )}
        </>
      </CheckboxBox>
    </InputBox>
  )
}

Checkbox.displayName = 'Checkbox'
