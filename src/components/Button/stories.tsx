import { Meta, StoryFn, StoryObj } from '@storybook/react'
import Button from '.'
import { ButtonProps } from './types'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj = {}

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />
export const ButtonWithColorWhite = Template.bind({})
ButtonWithColorWhite.args = {
  color: 'white'
}

export const ButtonWithColorBlack = Template.bind({})
ButtonWithColorBlack.args = {
  color: 'black'
}

export const ButtonWithColorDarkBlue = Template.bind({})
ButtonWithColorDarkBlue.args = {
  color: 'darkBlue'
}

export const ButtonWithColorLightBlue = Template.bind({})
ButtonWithColorLightBlue.args = {
  color: 'lightBlue'
}

export const ButtonWithColorBlueCyan = Template.bind({})
ButtonWithColorBlueCyan.args = {
  color: 'blueCyan'
}

export const ButtonWithColorRed = Template.bind({})
ButtonWithColorRed.args = {
  color: 'red'
}

export const ButtonWithColorGreen = Template.bind({})
ButtonWithColorGreen.args = {
  color: 'green'
}

export const ButtonWithColorTransparent = Template.bind({})
ButtonWithColorTransparent.args = {
  color: 'transparent'
}
