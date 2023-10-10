import { z } from 'zod'

export const schema = z.object({
  searchValue: z.string().min(1, 'Insira um valor para pesquisar.')
})
