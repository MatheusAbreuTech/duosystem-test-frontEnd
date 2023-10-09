'use client'

import * as S from './styles'
import { z } from 'zod'
import useTaskStore from '@/store/zustand'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import Input from '../Input'
import Button from '../Button'
import ErrorMessage from '../ErrorMessage'

const schema = z.object({
  taskDescription: z.string().min(1, 'Informe uma descrição para a tarefa.')
})

type ValidationSchemaType = z.infer<typeof schema>

const AddTask = () => {
  const addTask = useTaskStore((state) => state.addTask)
  const methods = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema)
  })

  const {
    handleSubmit,
    reset,
    formState: { errors }
  } = methods

  const handleAddTask: SubmitHandler<ValidationSchemaType> = (data) => {
    const { taskDescription } = data

    addTask(taskDescription)

    reset()
  }

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(handleAddTask)}>
        <label htmlFor="taskDescription">Adicionar tarefa:</label>

        <S.InputWrapper>
          <Input
            type="text"
            id="taskDescription"
            name="taskDescription"
            data-testid="taskDescription"
          />
          <Button type="submit">Adicionar</Button>
        </S.InputWrapper>
      </S.Form>
      <ErrorMessage errors={errors} field="taskDescription" />
    </FormProvider>
  )
}

export default AddTask
