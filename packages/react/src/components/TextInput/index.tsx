import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'
import { InputBox } from '../InputBox'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'size'> {
  label?: string
  prefix?: string
  error?: string
  size?: 'default' | 'small'
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ label, prefix, error, size, ...props }: TextInputProps, ref) => {
    return (
      <InputBox label={label} error={error}>
        <TextInputContainer errored={!!error} size={size}>
          {!!prefix && <Prefix>{prefix}</Prefix>}
          <Input ref={ref} {...props} />
        </TextInputContainer>
      </InputBox>
    )
  },
)

TextInput.displayName = 'TextInput'
