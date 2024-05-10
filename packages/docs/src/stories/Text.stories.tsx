import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum',
    variant: 'default',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: [
        'default',
        'primary',
        'danger',
        'success',
        'warning',
        'gray100',
        'gray200',
        'gray300',
        'gray400',
        'gray500',
        'gray600',
        'gray700',
        'gray800',
        'gray900',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
