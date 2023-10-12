import { fireEvent, render } from '@testing-library/react'

import Input from '.'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  test: z.string()
})
type ValidationSchemaType = z.infer<typeof schema>

describe('<Input />', () => {
  test('should renders with default values', () => {
    const TestComponent = () => {
      const methods = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
          test: 'teste'
        }
      })

      return (
        <FormProvider {...methods}>
          <Input name="test" />
        </FormProvider>
      )
    }

    const { container } = render(<TestComponent />)

    const inputElement = container.querySelector('#test') as HTMLInputElement

    expect(inputElement).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should change value when type', () => {
    const TestComponent = () => {
      const methods = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema)
      })

      return (
        <FormProvider {...methods}>
          <Input name="test" />
        </FormProvider>
      )
    }

    const { container } = render(<TestComponent />)

    const inputElement = container.querySelector('#test') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'Novo Valor' } })

    const inputValue = inputElement.value

    expect(inputValue).toBe('Novo Valor')
  })
})
