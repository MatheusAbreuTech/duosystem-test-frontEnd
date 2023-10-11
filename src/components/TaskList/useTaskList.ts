import useTaskStore from '@/store/zustand'
import { Task } from '@/types/Task'
import { useEffect, useState } from 'react'
import { FilterDirection, Filters } from './types'

export const useTaskList = () => {
  const {
    taskList,
    changeTaskStatusById,
    searchValue,
    removeTaskById,
    searchTasksByDescription
  } = useTaskStore()
  const [editTaskId, setEditTaskId] = useState('')
  const [data, setData] = useState<Task[]>(taskList)
  const [filterBy, setFilterBy] = useState<Filters>('all')
  const [filterDirection, setFilterDirection] = useState<FilterDirection>('asc')

  useEffect(() => {
    let copyData = [...taskList]

    if (filterBy === 'status') {
      copyData = copyData.filter((task) => task.status)
    } else if (filterBy === 'createdDate') {
      copyData = copyData.sort(
        (a, b) =>
          (filterDirection === 'asc' ? 1 : -1) *
          (b.createDate.getTime() - a.createDate.getTime())
      )
    }

    copyData = copyData.filter((task) =>
      task.description.toLowerCase().includes(searchValue.toLowerCase())
    )

    setData(copyData)
  }, [searchValue, filterBy, taskList, filterDirection])

  const handleFilterClick = (filter: Filters) => {
    if (filter === filterBy) {
      setFilterDirection(filterDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setFilterBy(filter)
      setFilterDirection('asc')
    }

    if (filter === 'all') {
      searchTasksByDescription('')
      setData(taskList)
    }
  }

  return {
    data,
    editTaskId,
    filterBy,
    filterDirection,
    handleFilterClick,
    setEditTaskId,
    changeTaskStatusById,
    removeTaskById
  }
}
