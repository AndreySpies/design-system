import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$smokedWhite',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
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
    variant: 'default',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
