import { render } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  test('should renders with default values', () => {
    const { getByText, container } = render(<Button color="white"></Button>)
    const defaultText = getByText('Label do botão')
    expect(defaultText).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should renders with provided children', () => {
    const buttonText = 'Click Me'
    const { getByText } = render(<Button color="white">{buttonText}</Button>)
    const renderedText = getByText(buttonText)
    expect(renderedText).toBeInTheDocument()
  })
})
