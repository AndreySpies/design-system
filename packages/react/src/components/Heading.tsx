import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$heading',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$5xl' },
      '4xl': { fontSize: '$6xl' },
      '5xl': { fontSize: '$7xl' },
      '6xl': { fontSize: '$8xl' },
    },
    variant: {
      default: { color: '$smokedWhite' },
      primary: { color: '$primary' },
      danger: { color: '$danger' },
      success: { color: '$success' },
      warning: { color: '$warning' },
      gray100: { color: '$gray100' },
      gray200: { color: '$gray200' },
      gray300: { color: '$gray300' },
      gray400: { color: '$gray400' },
      gray500: { color: '$gray500' },
      gray600: { color: '$gray600' },
      gray700: { color: '$gray700' },
      gray800: { color: '$gray800' },
      gray900: { color: '$gray900' },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'smokedWhite',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
