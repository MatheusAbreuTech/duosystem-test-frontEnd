import { render } from '@testing-library/react'

import SearchTask from '.'

describe('<SearchTask />', () => {
  it('should render the SearchTask component in screen', () => {
    // renderiza o component
    const { container } = render(<SearchTask />)

    expect(container).toBeInTheDocument()
  })
})
