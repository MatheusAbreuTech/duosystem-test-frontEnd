import React from 'react'
import GlobalStyles from '../src/styles/global'
import { Preview } from '@storybook/react'
import theme from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'bgDark',
      values: [
        {
          name: 'bgDark',
          value: theme.colors.bgDark
        }
      ]
    }
  }
}

export default preview

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
