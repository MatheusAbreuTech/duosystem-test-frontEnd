import { fireEvent, render } from '@testing-library/react'
import TaskList from '../TaskList'
import { useTaskList } from './useTaskList'
import { act, renderHook } from '@testing-library/react-hooks'
import useTaskStore from '@/store/zustand'

jest.mock('@/store/zustand')
const mockedUseTaskStore = useTaskStore as jest.MockedFunction<
  typeof useTaskStore
>

describe('<TaskList />', () => {
  it('should correctly render the component', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: []
    })
    const { container } = render(<TaskList />)
    expect(container).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
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

  it('should display the EditTask component when the edit button is clicked', () => {
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

    const { queryByTestId, getByTestId } = render(<TaskList />)

    const button = getByTestId(`editButton_testId`)

    fireEvent.click(button)

    expect(queryByTestId('editTaskComponent_testId')).toBeInTheDocument()
    expect(button).not.toBeInTheDocument()
  })

  it('should call the changeTaskStatusById function when clicking the change status button', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [
        {
          id: 'testId',
          description: 'Test',
          createDate: new Date('2022-01-01'),
          status: false
        }
      ],
      searchValue: '',
      changeTaskStatusById: jest.fn()
    })

    const { getByTestId } = render(<TaskList />)

    const changeStatusButton = getByTestId('changeStatusButton_testId')

    fireEvent.click(changeStatusButton)

    expect(useTaskStore().changeTaskStatusById).toHaveBeenCalledWith('testId')
  })

  it('should call the removeTaskById function when clicking the remove task button', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [
        {
          id: 'testId',
          description: 'Test',
          createDate: new Date('2022-01-01'),
          status: false
        }
      ],
      searchValue: '',
      removeTaskById: jest.fn()
    })

    const { getByTestId } = render(<TaskList />)

    const removeButton = getByTestId('removeTaskButton_testId')

    fireEvent.click(removeButton)

    expect(useTaskStore().removeTaskById).toHaveBeenCalledWith('testId')
  })
})

describe('useTaskList', () => {
  it('should start with the correct initial values', () => {
    mockedUseTaskStore.mockReturnValue({
      taskList: [],
      searchValue: ''
    })
    const { result } = renderHook(() => useTaskList())
    expect(result.current.data).toEqual([])
    expect(result.current.editTaskId).toBe('')
  })

  it('should return the list of tasks according to the filters passed when calling the handleFilterClick function', () => {
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

  it('should filter the list of tasks if the searchValue value is already defined', () => {
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
          description: 'Test2',
          createDate: new Date('2022-01-02'),
          status: false
        },
        {
          id: 'testId3',
          description: 'Test3',
          createDate: new Date('2022-01-03'),
          status: false
        },
        {
          id: 'testId4',
          description: 'Test4',
          createDate: new Date('2022-01-04'),
          status: false
        }
      ],
      searchValue: 'Test4'
    })

    const { result } = renderHook(() => useTaskList())

    expect(result.current.data).toEqual([
      {
        id: 'testId4',
        description: 'Test4',
        createDate: new Date('2022-01-04'),
        status: false
      }
    ])
  })
})
