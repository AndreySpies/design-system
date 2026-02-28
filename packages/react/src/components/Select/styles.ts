import { styled } from '../../styles'

export const SelectContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  '&:has(select:focus)': {
    borderColor: '$primary',
  },

  '&:has(select:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      small: {
        padding: '$2 $3',
      },
      default: {
        padding: '$3 $4',
      },
    },
    errored: {
      true: {
        borderColor: '$danger',
      },
    },
  },

  defaultVariants: {
    size: 'default',
    errored: false,
  },
})

export const SelectElement = styled('select', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$smokedWhite',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  appearance: 'none',
  paddingRight: '$6',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },

  // Basic styling for options to match the dark theme better (only affects some browsers, but good practice here)
  '& option': {
    backgroundColor: '$gray900',
    color: '$smokedWhite',
  }
})

export const CaretWrapper = styled('div', {
  position: 'absolute',
  right: '$4',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray400',
})
