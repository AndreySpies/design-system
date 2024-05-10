import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
    variant: 'default',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
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
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, heading is a `h2` component, but you can change it by using the `as` tag.',
      },
    },
  },
}
