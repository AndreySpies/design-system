import { styled, keyframes } from '../../styles'

export const DropdownContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const DropdownTrigger = styled('span', {})

const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
})

export const DropdownList = styled('ul', {
  position: 'absolute',
  // top: '100%',
  // left: 0,
  backgroundColor: '#18181B',
  borderRadius: '$lg',
  padding: 0,
  // margin: '$1 0',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999,
  minWidth: '100%', // ensures the dropdown list as wide as the container

  left: '50%',
  transform: 'translateX(-50%)',

  animation: `${fadeIn} 100ms ease-out`,

  '& li:first-child': {
    marginTop: '$2',
  },
  '& li:last-child': {
    marginBottom: '$2',
  },
})

export const DropdownItem = styled('li', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$smokedWhite',
  padding: '$2 $2',
  marginLeft: '$2',
  marginRight: '$2',
  width: '$40',
  borderRadius: '$md',
  cursor: 'pointer',

  variants: {
    variant: {
      default: {
        color: '$smokedWhite',

        '&:hover': {
          backgroundColor: '$gray700',
        },
      },
      danger: {
        color: '$danger',

        '&:hover': {
          backgroundColor: '$danger',
          color: '$smokedWhite',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})
