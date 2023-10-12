import { Meta, StoryObj } from '@storybook/react'
import AddTask from '.'

export default {
  title: 'AddTask',
  component: AddTask,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
    errors: {
      action: 'errors'
    }
  }
} as Meta

export const Default: StoryObj = {}
