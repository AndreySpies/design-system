import { styled } from '../../styles'

export const RadioGroupContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$2',
})

export const HiddenRadioInput = styled('input', {
  // Uses visually-hidden patterns to hide the real radio input
  // while keeping it accessible to screen readers & keyboard focus.
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px',
  whiteSpace: 'nowrap',
  wordWrap: 'normal',
})

export const RadioOptionContent = styled('span', {
  display: 'inline-block',
  backgroundColor: '$gray800',
  borderRadius: '$md',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  border: '2px solid transparent',
  transition: 'all 0.2s ease-in-out',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
        fontSize: '$xs',
      },
      md: {
        padding: '$2 $4',
        fontSize: '$xs',
      },
    }
  },

  defaultVariants: {
    size: 'md',
  }

})

export const RadioOptionContainer = styled('label', {
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',

  // Focus visible ring
  [`&:has(${HiddenRadioInput}:focus-visible) ${RadioOptionContent}`]: {
    borderColor: '$primary',
    boxShadow: '0 0 0 2px $colors$gray900, 0 0 0 4px $colors$primary',
  },

  // Selected state
  [`&:has(${HiddenRadioInput}:checked) ${RadioOptionContent}`]: {
    backgroundColor: '$primary',
    color: '$white',
    borderColor: '$primary',
  },

  // Hover state (when not checked and not disabled)
  [`&:has(${HiddenRadioInput}:not(:checked):not(:disabled)):hover ${RadioOptionContent}`]: {
    backgroundColor: '$gray700',
  },

  // Disabled state
  [`&:has(${HiddenRadioInput}:disabled)`]: {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
})
