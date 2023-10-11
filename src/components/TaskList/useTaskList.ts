import useTaskStore from '@/store/zustand'
import { Task } from '@/types/Task'
import { useEffect, useState } from 'react'
import { Filters } from './types'

export const useTaskList = () => {
  const { taskList, searchValue, searchTasksByDescription } = useTaskStore()

  const [editTaskId, setEditTaskId] = useState('')
  const [data, setData] = useState<Task[]>(taskList)

  useEffect(() => {
    let copyData = [...taskList]

    copyData = copyData.filter((task) =>
      task.description.toLowerCase().includes(searchValue.toLowerCase())
    )

    setData(copyData)
  }, [searchValue, taskList])

  const handleFilterClick = (filter: Filters) => {
    if (filter === 'all') {
      searchTasksByDescription('')
      setData([...taskList])
      return
    }

    if (filter === 'status') {
      let copyData = [...taskList]
      copyData = copyData.filter((task) => task.status)
      setData(copyData)
      return
    }

    if (filter === 'createdDate') {
      let copyData = [...taskList]

      copyData = copyData.sort(
        (a, b) => b.createDate.getTime() - a.createDate.getTime()
      )
      setData(copyData)
    }
  }

  return {
    data,
    editTaskId,
    handleFilterClick,
    setEditTaskId
  }
}
