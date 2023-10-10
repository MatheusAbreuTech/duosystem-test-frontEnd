import { z } from 'zod'
import { schema } from './schema'

export type EditTaskProps = {
  taskId: string
  setEditTaskId: (resetId: string) => void
}

export type SchemaType = z.infer<typeof schema>
