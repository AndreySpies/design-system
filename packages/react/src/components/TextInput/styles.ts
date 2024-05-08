import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$primary',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-alowed',
  },

  variants: {
    error: {
      true: {
        borderColor: '$danger',
      },
    },
  },

  defaultVariants: {
    error: false,
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$smokedWhite',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
