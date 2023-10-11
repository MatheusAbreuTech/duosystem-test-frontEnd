import { render } from '@testing-library/react'
import TaskList from '../TaskList'
import { useTaskList } from './useTaskList'
import { renderHook } from '@testing-library/react-hooks'

jest.mock('./useTaskList') // Mock do nosso hook

describe('TaskList', () => {
  it('deve renderizar corretamente', () => {
    useTaskList.mockReturnValue({
      data: [],
      editTaskId: '',
      handleFilterClick: jest.fn(),
      setEditTaskId: jest.fn(),
      changeTaskStatusById: jest.fn(),
      removeTaskById: jest.fn()
    })
    const { container } = render(<TaskList />)
    expect(container).toBeInTheDocument()
  })
})

describe('useTaskList', () => {
  it('deve ter o estado inicial correto', () => {
    useTaskList.mockReturnValue({
      data: [],
      editTaskId: ''
    })

    const { result } = renderHook(() => useTaskList())
    expect(result.current.data).toEqual([])
    expect(result.current.editTaskId).toBe('')
  })

  // it('handleFilterClick deve alterar filterBy e filterDirection corretamente', () => {
  //   useTaskList.mockReturnValue({
  //     filterBy: 'all',
  //     filterDirection: 'asc',
  //     handleFilterClick: jest.fn()
  //   })

  //   const { result } = renderHook(() => useTaskList())

  //   expect(result.current.filterBy).toBe('all')
  //   expect(result.current.filterDirection).toBe('asc')

  //   act(() => {
  //     result.current.handleFilterClick('status')

  //     expect(result.current.filterBy).toBe('status')
  //     expect(result.current.filterDirection).toBe('asc')
  //   })
  // })
})
