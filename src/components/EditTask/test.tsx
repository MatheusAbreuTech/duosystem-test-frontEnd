import { render } from '@testing-library/react'

import EditTask from '.'

describe('<EditTask />', () => {
  it('should render the EditTask component', () => {
    const setEditTaskIdMock = jest.fn()
    const { container } = render(
      <EditTask taskId={1} setEditTaskId={setEditTaskIdMock} />
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
