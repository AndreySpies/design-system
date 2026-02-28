import { ComponentProps, ElementRef, forwardRef } from 'react'
import { RadioGroupContainer, RadioOptionContainer, HiddenRadioInput, RadioOptionContent } from './styles'

export interface RadioSelectOptionProps extends Omit<ComponentProps<typeof HiddenRadioInput>, 'size'> {
  label: string
  size?: 'md' | 'sm'
  value: string | number
}

export const RadioSelectOption = forwardRef<ElementRef<typeof HiddenRadioInput>, RadioSelectOptionProps>(
  ({ label, size = 'md', ...props }: RadioSelectOptionProps, ref) => {
    return (
      <RadioOptionContainer>
        <HiddenRadioInput type="radio" ref={ref} {...props} />
        <RadioOptionContent size={size}>{label}</RadioOptionContent>
      </RadioOptionContainer>
    )
  },
)

RadioSelectOption.displayName = 'RadioSelectOption'

export interface RadioSelectProps extends ComponentProps<typeof RadioGroupContainer> {
  children?: React.ReactNode
}

export const RadioSelect = forwardRef<ElementRef<typeof RadioGroupContainer>, RadioSelectProps>(
  ({ children, ...props }: RadioSelectProps, ref) => {
    return (
      <RadioGroupContainer ref={ref} role="radiogroup" {...props}>
        {children}
      </RadioGroupContainer>
    )
  },
)

RadioSelect.displayName = 'RadioSelect'
