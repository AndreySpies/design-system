import { ComponentProps, forwardRef, ElementRef } from 'react'
import { InputBox } from '../InputBox'
import { TextAreaInput } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label?: string
  error?: string
  hint?: string
  required?: boolean
}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaInput>,
  TextAreaProps
>(({ label, error, hint, required, ...props }: TextAreaProps, ref) => {
  return (
    <InputBox label={label} error={error} hint={hint} required={required}>
      <TextAreaInput ref={ref} {...props} errored={!!error} />
    </InputBox>
  )
})

TextArea.displayName = 'TextArea'
