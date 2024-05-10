import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  variants: {
    background: {
      default: {
        backgroundColor: 'transparent',
      },
      gray600: {
        backgroundColor: '$gray600',
      },
      gray700: {
        backgroundColor: '$gray700',
      },
      gray800: {
        backgroundColor: '$gray800',
      },
      gray900: {
        backgroundColor: '$gray900',
      },
    },
  },

  defaultVariants: {
    background: 'default',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
