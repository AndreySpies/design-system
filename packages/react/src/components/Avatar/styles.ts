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
  },

  defaultVariants: {
    size: 'default',
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
