import { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    error: '',
    prefix: '',
    disabled: false,
  },
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    size: {
      options: ['default', 'small'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    label: 'Username',
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const Errored: StoryObj<TextInputProps> = {
  args: {
    error: 'This is a required field',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'linkedin.com/',
  },
}
