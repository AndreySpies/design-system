import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { InputBox } from '../InputBox'

export interface TextInputProps extends ComponentProps<typeof Input> {
  label?: string
  prefix?: string
  error?: string
}

export function TextInput({ label, prefix, error, ...props }: TextInputProps) {
  return (
    <InputBox label={label} error={error}>
      <TextInputContainer error={!!error}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputContainer>
    </InputBox>
  )
}

TextInput.displayName = 'TextInput'
