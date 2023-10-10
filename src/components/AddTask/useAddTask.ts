import useTaskStore from '@/store/zustand'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SchemaType } from './types'
import { schema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useAddTask = () => {
  const addTask = useTaskStore((state) => state.addTask)
  const methods = useForm<SchemaType>({
    resolver: zodResolver(schema)
  })

  const {
    handleSubmit,
    reset,
    formState: { errors }
  } = methods

  const handleAddTask: SubmitHandler<SchemaType> = (data) => {
    const { taskDescription } = data

    addTask(taskDescription)

    reset()
  }

  return {
    errors,
    methods,
    handleSubmit,
    handleAddTask
  }
}
