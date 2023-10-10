import { TaskStore } from '@/types/TaskStore'
import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

const useTaskStore = create<TaskStore>((set) => {
  return {
    taskList: [],
    searchValue: '',
    searchTasksByDescription: (description) => {
      set(() => ({
        searchValue: description
      }))
    },
    addTask: (description) => {
      const uuid = uuidv4()
      return set((state) => ({
        taskList: [
          ...state.taskList,
          {
            id: uuid,
            description: description,
            status: false,
            createDate: new Date()
          }
        ]
      }))
    },
    removeTaskById: (taskId) =>
      set((state) => ({
        taskList: state.taskList.filter((task) => task.id !== taskId)
      })),
    changeTaskStatusById: (taskId) =>
      set((state) => {
        const taskIndex = state.taskList.findIndex((task) => task.id === taskId)

        if (taskIndex !== -1) {
          const currentStatus = state.taskList[taskIndex].status

          const cloneTaskList = [...state.taskList]
          cloneTaskList[taskIndex] = {
            ...cloneTaskList[taskIndex],
            status: !currentStatus
          }

          return { taskList: cloneTaskList }
        }

        return state
      }),
    changeTaskDescriptionById: (taskId, description) =>
      set((state) => {
        const taskIndex = state.taskList.findIndex((task) => task.id === taskId)

        if (taskIndex !== -1) {
          const cloneTaskList = [...state.taskList]
          cloneTaskList[taskIndex] = {
            ...cloneTaskList[taskIndex],
            description: description
          }

          return { taskList: cloneTaskList }
        }

        return state
      })
  }
})

export default useTaskStore
