import { z } from 'zod'
import { schema } from './schema'

export type ValidationSchemaType = z.infer<typeof schema>
