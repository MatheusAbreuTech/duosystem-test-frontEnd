import { Meta, StoryFn } from '@storybook/react'
import Input from '.'
import { FormProvider, useForm } from 'react-hook-form'
import { SchemaType } from '../AddTask/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../AddTask/schema'

export default {
  title: 'Input',
  component: Input
} as Meta

const Template: StoryFn = () => {
  const methods = useForm<SchemaType>({
    resolver: zodResolver(schema)
  })

  return (
    <FormProvider {...methods}>
      <Input name="taskDescription" style={{ border: `1px solid #000` }} />
    </FormProvider>
  )
}

export const Default = Template.bind({})
