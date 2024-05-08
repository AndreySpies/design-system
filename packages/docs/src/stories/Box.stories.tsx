import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@spies-ui/react/dist/index'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testing box element</Text>
      </>
    ),
    background: 'default',
  },
  argTypes: {
    background: {
      options: ['default', 'gray600', 'gray700', 'gray800', 'gray900'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
