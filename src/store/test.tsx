import { renderHook, act } from '@testing-library/react-hooks'
import useTaskStore from './zustand'

describe('zustand', () => {
  it('should add a task', () => {
    const { result } = renderHook(() => useTaskStore())
    act(() => {
      result.current.addTask('Nova tarefa')
    })
    expect(result.current.taskList.length).toBe(1)
    expect(result.current.taskList[0].description).toBe('Nova tarefa')
  })

  it('should remove a task by id', () => {
    const { result } = renderHook(() => useTaskStore())

    expect(result.current.taskList.length).toBe(1)
    expect(result.current.taskList[0].description).toBe('Nova tarefa')

    act(() => {
      result.current.removeTaskById(1)
    })
    expect(result.current.taskList.length).toBe(0)
  })

  it('should change task status by id', () => {
    const { result } = renderHook(() => useTaskStore())
    act(() => {
      result.current.addTask('Nova tarefa')
    })
    expect(result.current.taskList.length).toBe(1)
    expect(result.current.taskList[0].description).toBe('Nova tarefa')

    act(() => {
      result.current.addTask('Nova tarefa')
      result.current.changeTaskStatusById(1)
    })
    expect(result.current.taskList[0].status).toBe(true)
  })

  it('should change task description by id', () => {
    const { result } = renderHook(() => useTaskStore())
    act(() => {
      result.current.changeTaskDescriptionById(1, 'Tarefa atualizada')
    })
    expect(result.current.taskList[0].description).toBe('Tarefa atualizada')
  })

  it('should search tasks by description', () => {
    const { result } = renderHook(() => useTaskStore())
    act(() => {
      result.current.searchTasksByDescription('Nova tarefa')
    })
    expect(result.current.searchValue).toBe('Nova tarefa')
  })
})
