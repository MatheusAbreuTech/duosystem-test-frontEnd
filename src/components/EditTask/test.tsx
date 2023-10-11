import { render, renderHook } from '@testing-library/react'

import EditTask from '.'
import useTaskStore from '@/store/zustand'
import { useEditTask } from './useEditTask'
import { act } from '@testing-library/react-hooks'

jest.mock('@/store/zustand')
const mockedUseTaskStore = useTaskStore as jest.MockedFunction<
  typeof useTaskStore
>

describe('<EditTask />', () => {
  it('should render the EditTask component', () => {
    const setEditTaskIdMock = jest.fn()
    mockedUseTaskStore.mockReturnValue({
      taskList: [{ id: 'id', description: 'Test task' }]
    })
    const { container } = render(
      <EditTask taskId={'id'} setEditTaskId={setEditTaskIdMock} />
    )

    expect(container).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should set initial form state correctly', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [{ id: '1', description: 'Test task' }]
    })

    const { result } = renderHook(() =>
      useEditTask({ taskId: '1', setEditTaskId: jest.fn() })
    )

    expect(result.current.methods.getValues()).toEqual({
      editTaskField: 'Test task'
    })
  })

  it('should handle form submission correctly', () => {
    const changeTaskDescriptionById = jest.fn()
    const setEditTaskId = jest.fn()

    mockedUseTaskStore.mockReturnValue({
      taskList: [{ id: '1', description: 'Test task' }],
      changeTaskDescriptionById
    })

    const { result } = renderHook(() =>
      useEditTask({ taskId: '1', setEditTaskId })
    )

    act(() => {
      result.current.handleEditTask({ editTaskField: 'Updated task' })
    })

    expect(changeTaskDescriptionById).toHaveBeenCalledWith('1', 'Updated task')
    expect(setEditTaskId).toHaveBeenCalledWith('')
  })
})
