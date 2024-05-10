import { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Accept terms of service',
    disabled: false,
    error: '',
    hint: '',
    required: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
    label: 'Accept terms of service',
  },
}

export const Errored: StoryObj<CheckboxProps> = {
  args: {
    label: 'Accept terms of service',
    error: 'You need to accept the terms before continuing',
  },
}
