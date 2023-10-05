import { render } from '@testing-library/react'

import AddTask from '.'

describe('<Teste />', () => {
  it('should render the heading', () => {
    const { container } = render(<AddTask />)

    expect(container).toBeInTheDocument()
  })
})
