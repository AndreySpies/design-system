import { ComponentProps } from 'react'
import { InputBox } from '../InputBox'
import { TextAreaInput } from './styles'

export interface TextAreaProps extends ComponentProps<typeof TextAreaInput> {
  label?: string
  error?: string | undefined
}

export function TextArea({ label, error, ...props }: TextAreaProps) {
  return (
    <InputBox label={label} error={error}>
      <TextAreaInput {...props} error={!!error} />
    </InputBox>
  )
}

TextArea.displayName = 'TextArea'
