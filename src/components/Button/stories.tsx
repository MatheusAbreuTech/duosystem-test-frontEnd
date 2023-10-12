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
  color: 'white',
  label: 'bg-white'
}

export const ButtonWithColorBlack = Template.bind({})
ButtonWithColorBlack.args = {
  color: 'black',
  label: 'bg-black'
}

export const ButtonWithColorDarkBlue = Template.bind({})
ButtonWithColorDarkBlue.args = {
  color: 'darkBlue',
  label: 'bg-darkBlue'
}

export const ButtonWithColorLightBlue = Template.bind({})
ButtonWithColorLightBlue.args = {
  color: 'lightBlue',
  label: 'bg-lightBlue'
}

export const ButtonWithColorBlueCyan = Template.bind({})
ButtonWithColorBlueCyan.args = {
  color: 'blueCyan',
  label: 'bg-blueCyan'
}

export const ButtonWithColorRed = Template.bind({})
ButtonWithColorRed.args = {
  color: 'red',
  label: 'bg-red'
}

export const ButtonWithColorGreen = Template.bind({})
ButtonWithColorGreen.args = {
  color: 'green',
  label: 'bg-green'
}

export const ButtonWithColorTransparent = Template.bind({})
ButtonWithColorTransparent.args = {
  color: 'transparent',
  label: 'bg-transparent'
}
