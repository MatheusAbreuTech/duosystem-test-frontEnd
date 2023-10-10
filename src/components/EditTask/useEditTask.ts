import useTaskStore from '@/store/zustand'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EditTaskProps, SchemaType } from './types'
import { schema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useEditTask = ({ taskId, setEditTaskId }: EditTaskProps) => {
  const { taskList, changeTaskDescriptionById } = useTaskStore()

  const methods = useForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      editTaskField: taskList.find((task) => task.id === taskId)?.description
    }
  })

  const {
    handleSubmit,
    reset,
    formState: { errors }
  } = methods

  const handleEditTask: SubmitHandler<SchemaType> = (data) => {
    const { editTaskField } = data

    changeTaskDescriptionById(taskId, editTaskField)
    setEditTaskId('')
    reset()
  }
  return {
    errors,
    methods,
    handleSubmit,
    handleEditTask
  }
}
