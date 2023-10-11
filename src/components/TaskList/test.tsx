import { render } from '@testing-library/react'
import TaskList from '../TaskList'
import { useTaskList } from './useTaskList'
import { act, renderHook } from '@testing-library/react-hooks'
import useTaskStore from '@/store/zustand'

jest.mock('@/store/zustand')
const mockedUseTaskStore = useTaskStore as jest.MockedFunction<
  typeof useTaskStore
>

describe('TaskList', () => {
  it('deve renderizar corretamente', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: []
    })
    const { container } = render(<TaskList />)
    expect(container).toBeInTheDocument()
  })

  it('should only render a message when it has no task', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [],
      searchValue: ''
    })

    const { getByText, queryByTestId } = render(<TaskList />)
    expect(getByText('Nenhuma tarefa encontrada')).toBeInTheDocument()
    expect(queryByTestId('list-data')).not.toBeInTheDocument()
  })

  it('should render tasks when provided', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [
        {
          id: 'testId',
          description: 'Test',
          createDate: new Date('2022-01-01'),
          status: false
        }
      ],
      searchValue: ''
    })
    const { getByText } = render(<TaskList />)
    expect(getByText('Test')).toBeInTheDocument()
  })

  // it('should display the EditTask component when the edit task button is clicked', () => {
  //   mockedUseTaskStore.mockReturnValue({
  //     taskList: [
  //       {
  //         id: 'testId',
  //         description: 'Test',
  //         createDate: new Date('2022-01-01'),
  //         status: false
  //       }
  //     ],
  //     searchValue: ''
  //   })

  //   const { getByTestId } = render(<TaskList />)
  //   // const component = renderer.create(<TaskList />).toJSON()

  //   // const button = getByTestId(`editButton_testId`)
  //   // console.log(component)

  //   fireEvent.click(button)

  //   expect(getByTestId('editTaskComponent_testId')).toBeInTheDocument()
  // })
})

describe('useTaskList', () => {
  it('deve ter o estado inicial correto', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [],
      searchValue: ''
    })
    const { result } = renderHook(() => useTaskList())
    expect(result.current.data).toEqual([])
    expect(result.current.editTaskId).toBe('')
  })

  it('deve alterar o estado data corretamente quando mudar os filtros', async () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [
        {
          id: 'testId',
          description: 'Test',
          createDate: new Date('2022-01-01'),
          status: false
        },
        {
          id: 'testId2',
          description: 'Test',
          createDate: new Date('2021-12-31'),
          status: true
        }
      ],
      searchValue: '',
      searchTasksByDescription: jest.fn()
    })
    const { result } = renderHook(() => useTaskList())

    expect(result.current.data).toHaveLength(2)

    act(() => {
      result.current.handleFilterClick('all')
    })

    expect(result.current.data).toHaveLength(2)

    act(() => {
      result.current.handleFilterClick('status')
    })

    expect(result.current.data).toHaveLength(1)
    expect(result.current.data).toEqual([
      {
        id: 'testId2',
        description: 'Test',
        createDate: new Date('2021-12-31'),
        status: true
      }
    ])

    act(() => {
      result.current.handleFilterClick('createdDate')
    })

    const dataFiltered = result.current.data.sort(
      (a, b) => b.createDate.getTime() - a.createDate.getTime()
    )

    expect(result.current.data).toEqual(dataFiltered)
  })
})
