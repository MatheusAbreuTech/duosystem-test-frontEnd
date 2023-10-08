import { render } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  test('should renders with default values', () => {
    const { getByText } = render(<Button />)
    const defaultText = getByText('Label do botão')
    expect(defaultText).toBeInTheDocument()
  })

  test('should renders with provided children', () => {
    const buttonText = 'Click Me'
    const { getByText } = render(<Button>{buttonText}</Button>)
    const renderedText = getByText(buttonText)
    expect(renderedText).toBeInTheDocument()
  })
})
