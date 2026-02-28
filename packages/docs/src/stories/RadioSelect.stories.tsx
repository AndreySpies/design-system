import { StoryObj, Meta } from '@storybook/react'
import { RadioSelect, RadioSelectOption, RadioSelectProps } from '@spies-ui/react/dist/index'

export default {
  title: 'Form/Radio Select',
  component: RadioSelect,
  parameters: {
    docs: {
      description: {
        component:
          'The Radio Select component functions as a selectable group of buttons or tags, where only one choice can be active at a time. It uses standard hidden radio inputs for accessibility.',
      },
    },
  },
  args: {
    size: 'md',
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
  argTypes: {
    size: {
      options: ['md', 'sm'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  render: ({ size, ...args }: any) => {
    return (
      <RadioSelect {...args}>
        <RadioSelectOption size={size} label="Option 1" name={args.name || 'radiogroup'} value="1" defaultChecked />
        <RadioSelectOption size={size} label="Option 2" name={args.name || 'radiogroup'} value="2" disabled={args.disabledOption} />
        <RadioSelectOption size={size} label="Option 3" name={args.name || 'radiogroup'} value="3" />
      </RadioSelect>
    )
  },
} as Meta<RadioSelectProps & { size?: 'md' | 'sm'; name?: string; disabledOption?: boolean }>

export const Primary: StoryObj<RadioSelectProps & { size?: 'md' | 'sm'; name?: string; disabledOption?: boolean }> = {
  args: {
    name: 'primary',
  },
}

export const Disabled: StoryObj<RadioSelectProps & { size?: 'md' | 'sm'; name?: string; disabledOption?: boolean }> = {
  args: {
    name: 'disabled',
    disabledOption: true,
  },
}

export const Small: StoryObj<RadioSelectProps & { size?: 'md' | 'sm'; name?: string; disabledOption?: boolean }> = {
  args: {
    name: 'small',
    size: 'sm',
  },
}
