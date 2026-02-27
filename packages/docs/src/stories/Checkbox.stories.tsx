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
    radius: 'md',
    labelProps: {},
    errorProps: {},
    hintProps: {},
    requiredAsteriskProps: {},
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    radius: {
      options: ['px', 'xs', 'sm', 'md', 'lg', 'full'],
      control: {
        type: 'inline-radio',
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

export const CustomTextProps: StoryObj<CheckboxProps> = {
  args: {
    label: 'Accept terms of service',
    hint: 'Check this to proceed',
    required: true,
    labelProps: { variant: 'primary', size: 'md' },
    hintProps: { variant: 'primary', size: 'sm' },
    requiredAsteriskProps: { variant: 'warning', size: 'md' },
  },
}
