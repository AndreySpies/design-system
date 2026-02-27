import { ComponentProps, forwardRef, ElementRef } from 'react'
import { InputBox } from '../InputBox'
import { TextAreaInput } from './styles'

import { TextProps } from '../Text'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label?: string
  error?: string
  hint?: string
  required?: boolean
  labelProps?: Omit<TextProps, 'children'>
  errorProps?: Omit<TextProps, 'children'>
  hintProps?: Omit<TextProps, 'children'>
  requiredAsteriskProps?: Omit<TextProps, 'children'>
}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaInput>,
  TextAreaProps
>(({ label, error, hint, required, labelProps, errorProps, hintProps, requiredAsteriskProps, ...props }: TextAreaProps, ref) => {
  return (
    <InputBox label={label} error={error} hint={hint} required={required} labelProps={labelProps} errorProps={errorProps} hintProps={hintProps} requiredAsteriskProps={requiredAsteriskProps}>
      <TextAreaInput ref={ref} {...props} errored={!!error} />
    </InputBox>
  )
})

TextArea.displayName = 'TextArea'
