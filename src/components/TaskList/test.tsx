import { render } from '@testing-library/react'
import TaskList from '.'

describe('<TaskList />', () => {
  it('should render the TaskList component in screen', () => {
    // renderiza o component
    const { container } = render(<TaskList />)

    expect(container).toBeInTheDocument()
  })
})
