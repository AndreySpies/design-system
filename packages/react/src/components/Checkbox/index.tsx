import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator, CheckboxBox } from './styles'
import { Text } from '../Text'
import { InputBox } from '../InputBox'
import { ComponentProps } from 'react'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  label?: string
  error?: string
}

export function Checkbox({ label, error, ...props }: CheckboxProps) {
  return (
    <InputBox error={error}>
      <CheckboxBox>
        <CheckboxContainer {...props} error={!!error}>
          <CheckboxIndicator asChild>
            <Check weight="bold" />
          </CheckboxIndicator>
        </CheckboxContainer>
        {!!label && <Text size="sm">{label}</Text>}
      </CheckboxBox>
    </InputBox>
  )
}

Checkbox.displayName = 'Checkbox'
