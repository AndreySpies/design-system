import { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    label: '',
    error: '',
    hint: '',
    placeholder: '',
    disabled: false,
  },
  argTypes: {
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

export const CustomTextProps: StoryObj<TextAreaProps> = {
  args: {
    label: 'Observations',
    placeholder: 'Please, type your observations here',
    hint: 'Add any helpful observations',
    required: true,
    labelProps: { variant: 'primary', size: 'md' },
    hintProps: { variant: 'primary', size: 'sm' },
    requiredAsteriskProps: { variant: 'warning', size: 'md' },
  },
}
