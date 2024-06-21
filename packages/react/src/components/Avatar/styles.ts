import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',

  overflow: 'hidden',

  variants: {
    size: {
      default: {
        width: '$12',
        height: '$12',
      },
      large: {
        width: '$20',
        height: '$20',
      },
    },
    border: {
      none: {
        border: '0',
      },
      default: {
        border: '2px solid $smokedWhite',
      },
      primary: {
        border: '2px solid $primary',
      },
      primaryLight: {
        border: '2px solid $primaryLight',
      },
      success: {
        border: '2px solid $success',
      },
      danger: {
        border: '2px solid $danger',
      },
      warning: {
        border: '2px solid $warning',
      },
    },
  },

  defaultVariants: {
    size: 'default',
    border: 'none',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFix: 'cover',
  borderRadius: 'inherit',
})
export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
