import { ComponentProps, forwardRef, ElementRef } from 'react'
import { InputBox } from '../InputBox'
import { TextAreaInput } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label?: string
  error?: string
}

export const TextArea = forwardRef<
  ElementRef<typeof TextAreaInput>,
  TextAreaProps
>(({ label, error, ...props }: TextAreaProps, ref) => {
  return (
    <InputBox label={label} error={error}>
      <TextAreaInput ref={ref} {...props} errored={!!error} />
    </InputBox>
  )
})

TextArea.displayName = 'TextArea'
