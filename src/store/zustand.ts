import { Task } from '@/types/Task'
import { create } from 'zustand'

type TaskStore = {
  taskList: Task[]
  addTask: (description: string) => void
  removeTaskById: (taskId: number) => void
  changeTaskStatusById: (taskId: number) => void
}

const useTaskStore = create<TaskStore>((set) => {
  return {
    taskList: [],
    addTask: (description) =>
      set((state) => ({
        taskList: [
          ...state.taskList,
          {
            id: state.taskList.length + 1,
            description: description,
            status: false
          }
        ]
      })),
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

          console.log(cloneTaskList)

          return { taskList: cloneTaskList }
        }

        return state
      })
  }
})

export default useTaskStore
