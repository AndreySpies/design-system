import { ComponentProps, ElementRef, forwardRef } from 'react'
import { CaretDown } from 'phosphor-react'
import { SelectContainer, SelectElement, CaretWrapper } from './styles'
import { InputBox } from '../InputBox'
import { TextProps } from '../Text'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps extends Omit<ComponentProps<typeof SelectElement>, 'size'> {
  label?: string
  error?: string
  hint?: string
  required?: boolean
  size?: 'default' | 'small'
  options?: SelectOption[]
  labelProps?: Omit<TextProps, 'children'>
  errorProps?: Omit<TextProps, 'children'>
  hintProps?: Omit<TextProps, 'children'>
  requiredAsteriskProps?: Omit<TextProps, 'children'>
}

export const Select = forwardRef<ElementRef<typeof SelectElement>, SelectProps>(
  (
    {
      label,
      error,
      hint,
      required,
      size,
      options,
      labelProps,
      errorProps,
      hintProps,
      requiredAsteriskProps,
      children,
      ...props
    }: SelectProps,
    ref,
  ) => {
    return (
      <InputBox
        label={label}
        error={error}
        hint={hint}
        required={required}
        labelProps={labelProps}
        errorProps={errorProps}
        hintProps={hintProps}
        requiredAsteriskProps={requiredAsteriskProps}
      >
        <SelectContainer errored={!!error} size={size}>
          <SelectElement ref={ref} {...props}>
            {options
              ? options.map((option) => (
                <option key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>
              ))
              : children}
          </SelectElement>
          <CaretWrapper>
            <CaretDown size={14} weight="bold" />
          </CaretWrapper>
        </SelectContainer>
      </InputBox>
    )
  },
)

Select.displayName = 'Select'
