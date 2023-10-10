import { z } from 'zod'
import { schema } from './schema'

export type SchemaType = z.infer<typeof schema>
