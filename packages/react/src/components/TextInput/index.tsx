import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { InputBox } from '../InputBox'

import { TextProps } from '../Text'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  label?: string
  prefix?: string
  error?: string
  hint?: string
  required?: boolean
  size?: 'default' | 'small'
  labelProps?: Omit<TextProps, 'children'>
  errorProps?: Omit<TextProps, 'children'>
  hintProps?: Omit<TextProps, 'children'>
  requiredAsteriskProps?: Omit<TextProps, 'children'>
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    { label, prefix, error, hint, required, size, labelProps, errorProps, hintProps, requiredAsteriskProps, ...props }: TextInputProps,
    ref,
  ) => {
    return (
      <InputBox label={label} error={error} hint={hint} required={required} labelProps={labelProps} errorProps={errorProps} hintProps={hintProps} requiredAsteriskProps={requiredAsteriskProps}>
        <TextInputContainer errored={!!error} size={size}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
      </InputBox>
    )
  },
)

TextInput.displayName = 'TextInput'
