import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Dropdown,
  DropdownProps,
  Button,
  Option,
} from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Dropdown',
  component: Dropdown,
  args: {},
} as Meta<DropdownProps>

const options: Option[] = [
  {
    text: 'Settings',
    onSelect: () => {
      console.log('Selected Option 1')
    },
  },
  {
    text: 'My Account',
    onSelect: () => {
      console.log('Selected Option 2')
    },
  },
  {
    text: 'Logout',
    onSelect: () => {
      console.log('Selected Option 2')
    },
    variant: 'danger',
  },
]

export const Primary: StoryObj<DropdownProps> = {
  args: {
    options,
    name: 'Options',
  },
  decorators: [
    (Story) => (
      <Box style={{ marginLeft: '32px' }}>
        <Story />
      </Box>
    ),
  ],
}

export const Secondary: StoryObj<DropdownProps> = {
  args: {
    options,
    children: (
      <Button radius="full" variant="primary">
        Options
      </Button>
    ),
  },
  decorators: [
    (Story) => (
      <Box style={{ marginLeft: '32px', paddingTop: '75%' }}>
        <Story />
      </Box>
    ),
  ],
}
