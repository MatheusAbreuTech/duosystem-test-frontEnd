import { z } from 'zod'
import { schema } from './schema'

export type EditTaskProps = {
  taskId: string
  setEditTaskId: (taskId: string) => void
}

export type SchemaType = z.infer<typeof schema>
