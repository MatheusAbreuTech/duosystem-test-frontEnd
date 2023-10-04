import { render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the Main component in screen', () => {
    // renderiza o component
    const { container } = render(<Main />)

    expect(container).toBeInTheDocument()
  })
})
