import { Meta, StoryObj } from '@storybook/react'
import TaskSearch from '.'

export default {
  title: 'TaskSearch',
  component: TaskSearch,
  argTypes: {
    searchValue: { action: 'searchValue' },
    handleInputSearch: { action: 'handleInputSearch' }
  }
} as Meta

export const Default: StoryObj = {}
