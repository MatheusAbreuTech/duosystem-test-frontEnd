import { Meta, StoryObj } from '@storybook/react'
import ErrorMessage from '.'

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  args: {
    field: 'testField',
    errors: {
      testField: {
        message: 'mensagem de erro'
      }
    }
  }
} as Meta

export const Default: StoryObj = {}
