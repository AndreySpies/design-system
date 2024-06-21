import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: '',
    size: 'default',
    border: 'none',
  },
  argTypes: {
    size: {
      options: ['default', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    border: {
      options: [
        'none',
        'default',
        'primary',
        'success',
        'danger',
        'warning',
        'primaryLight',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
}
