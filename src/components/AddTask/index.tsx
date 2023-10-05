'use client'

import * as S from './styles'
import { z } from 'zod'
// import useTaskStore from '@/store/zustand'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'

const taskDescriptionSchema = z.object({
  taskDescription: z.string().min(1, 'Este campo é obrigatório.')
})

type ValidationSchema = z.infer<typeof taskDescriptionSchema>

const AddTask = () => {
  // const addTask = useTaskStore((state) => state.addTask)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ValidationSchema>({
    resolver: zodResolver(taskDescriptionSchema)
  })

  const handleAddTask: SubmitHandler<ValidationSchema> = (data) => {
    // addTask(data.taskDescription)
    console.log(data)
  }

  return (
    <S.Form onSubmit={handleSubmit(handleAddTask)}>
      <label htmlFor="">Adicionar tarefa: </label>
      <input type="text" {...register('taskDescription')} />

      {errors.taskDescription && <p>{errors.taskDescription?.message}</p>}

      <button type="submit">Adicionar task</button>
    </S.Form>
  )
}

export default AddTask
