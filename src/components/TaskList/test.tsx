import { render } from '@testing-library/react'
import TaskList from '.'

describe('<TaskList />', () => {
  it('should render the TaskList component in screen', () => {
    const { container } = render(<TaskList />)

    expect(container).toBeInTheDocument()
  })
})
