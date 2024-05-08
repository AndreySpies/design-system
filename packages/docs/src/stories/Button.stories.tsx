import { StoryObj, Meta } from '@storybook/react'
// import { Button } from '../../../react/dist/index.mjs'
import { Button, ButtonProps } from '@spies-ui/react/dist/index'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['default', 'primary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['default', 'fit', 'small'],
      control: {
        type: 'inline-radio',
      },
    },
    radius: {
      options: ['default', 'small', 'full'],
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
  args: {
    children: 'Submit',
    variant: 'default',
    size: 'default',
    radius: 'default',
    disabled: false,
  },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Fit: StoryObj<ButtonProps> = {
  args: {
    size: 'fit',
  },
}

export const RadiusSmall: StoryObj<ButtonProps> = {
  args: {
    radius: 'small',
  },
}

export const RadiusFull: StoryObj<ButtonProps> = {
  args: {
    radius: 'full',
  },
}
