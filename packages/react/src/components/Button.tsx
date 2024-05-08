'use client'

import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  textAlign: 'center',
  minWidth: 0,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  transition: '0.2s',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray200',
    borderColor: '$gray200',
  },

  variants: {
    variant: {
      default: {
        backgroundColor: 'transparent',
        border: '2px solid $gray500',
        color: '$smokedWhite',

        '&:not(:disabled):hover': {
          borderColor: '$gray600',
        },

        '&:focus': {
          borderColor: '$primary',
        },
      },
      primary: {
        backgroundColor: '$primary',
        border: '2px solid $primary',
        color: '$smokedWhite',

        '&:not(:disabled):hover': {
          backgroundColor: '$primaryLight',
          borderColor: '$primaryLight',
        },

        '&:focus': {
          borderColor: '$smokedWhite',
        },
      },
    },

    size: {
      default: {
        padding: '$3 $6',
      },
      fit: {
        width: '100%',
        paddingTop: '$3',
        paddingBottom: '$3',
      },
      small: {
        padding: '$3 $4',
      },
    },

    radius: {
      small: {
        borderRadius: '$sm',
      },
      default: {
        borderRadius: '$lg',
      },
      full: {
        borderRadius: '$full',
      },
    },
  },

  defaultVariants: {
    size: 'default',
    radius: 'default',
    variant: 'default',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
