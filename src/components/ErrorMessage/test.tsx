import { render } from '@testing-library/react'
import { FieldErrors } from 'react-hook-form'

import ErrorMessage from '.'

describe('<ErrorMessage />', () => {
  it('should display an error message when there is an error in the field', () => {
    const errors: FieldErrors = {
      campoTeste: {
        type: 'manual',
        message: 'teste'
      }
    }

    const { getByText, queryByText, container } = render(
      <ErrorMessage errors={errors} field="campoTeste" />
    )

    const errorMessage = getByText('teste')
    expect(errorMessage).toBeInTheDocument()

    const errorMessage2 = queryByText('testeeee')
    expect(errorMessage2).toBeNull

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should not display an error message when there is not an error', () => {
    const noErrors = {}

    const { queryByText } = render(
      <ErrorMessage errors={noErrors} field="campoTeste" />
    )

    const errorMessage = queryByText('Este é um erro de teste')
    expect(errorMessage).toBeNull()
  })
})
