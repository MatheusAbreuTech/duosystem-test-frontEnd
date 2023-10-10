import { Task } from '@/types/Task'

export type TaskStore = {
  taskList: Task[]
  searchValue: string
  searchTasksByDescription: (description: string) => void
  addTask: (description: string) => void
  removeTaskById: (taskId: string) => void
  changeTaskStatusById: (taskId: string) => void
  changeTaskDescriptionById: (taskId: string, description: string) => void
}
