'use client'

import { styled, keyframes } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxBox = styled('div', {
  display: 'flex',
  gap: '$2',

  '&:has(button:disabled)': {
    opacity: 0.5,
  },
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$primary',
    borderColor: '$primary',
  },

  '&:focus': {
    border: '2px solid $primary',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    errored: {
      true: {
        borderColor: '$danger',
      },
    },
  },

  defaultVariants: {
    errored: false,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(-100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$smokedWhite',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 100ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 100ms ease-out`,
  },
})
