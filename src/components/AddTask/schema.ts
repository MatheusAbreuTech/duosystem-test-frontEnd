import { z } from 'zod'

export const schema = z.object({
  taskDescription: z.string().min(1, 'Informe uma descrição para a tarefa.')
})
