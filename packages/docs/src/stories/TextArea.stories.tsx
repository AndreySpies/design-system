import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    error: '',
    label: '',
    placeholder: '',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    label: 'Observations',
    placeholder: 'Please, type your observations here',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}

export const Errored: StoryObj<TextAreaProps> = {
  args: {
    error: 'This is a required field',
  },
}
