import { StoryObj, Meta } from '@storybook/react'
import { Select, SelectProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'The Select component allows users to choose one option from a dropdown list. It supports both children-based rendering (via `<option>` tags) and prop-based rendering (via the `options` array).',
      },
    },
  },
  args: {
    error: '',
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
    options: {
      description: 'An array of objects specifying label, value, and optionally disabled state for each option.',
      control: {
        type: 'object',
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
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {
  args: {
    label: 'Option',
    hint: 'Choose an option',
    children: (
      <>
        <option value="" disabled selected>Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    )
  },
}

export const Disabled: StoryObj<SelectProps> = {
  args: {
    label: 'Option',
    disabled: true,
    children: (
      <>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    )
  },
}

export const Errored: StoryObj<SelectProps> = {
  args: {
    label: 'Option',
    error: 'This is a required field',
    children: (
      <>
        <option value="1">Option 1</option>
      </>
    )
  },
}

export const Small: StoryObj<SelectProps> = {
  args: {
    label: 'Option',
    size: 'small',
    children: (
      <>
        <option value="1">Option 1</option>
      </>
    )
  },
}

export const WithOptions: StoryObj<SelectProps> = {
  args: {
    label: 'Option',
    hint: 'Choose an option',
    options: [
      { label: 'Select an option', value: '', disabled: true },
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can provide an `options` array with `{ label, value, disabled? }` objects instead of passing `<option>` elements as children.',
      },
    },
  },
}
