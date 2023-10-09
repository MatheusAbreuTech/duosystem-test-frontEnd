import { Task } from './Task'

export type TaskStore = {
  taskList: Task[]
  searchValue: string
  searchTasksByDescription: (description: string) => void
  addTask: (description: string) => void
  removeTaskById: (taskId: number) => void
  changeTaskStatusById: (taskId: number) => void
  changeTaskDescriptionById: (taskId: number, description: string) => void
}
