import { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    error: '',
    prefix: '',
    hint: '',
    required: false,
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
    labelProps: {
      description: 'Accepts the same props as the Text component',
    },
    errorProps: {
      description: 'Accepts the same props as the Text component',
    },
    hintProps: {
      description: 'Accepts the same props as the Text component',
    },
    requiredAsteriskProps: {
      description: 'Accepts the same props as the Text component',
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    label: 'Username',
    placeholder: 'Type your username',
    hint: 'Your username can only contain letters and hyphens',
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

export const CustomTextProps: StoryObj<TextInputProps> = {
  args: {
    label: 'Username',
    placeholder: 'Type your username',
    hint: 'Your username can only contain letters and hyphens',
    required: true,
    labelProps: { variant: 'primary', size: 'md' },
    hintProps: { variant: 'primary', size: 'sm' },
    requiredAsteriskProps: { variant: 'warning', size: 'md' },
  },
}
