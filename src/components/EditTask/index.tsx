'use client'

import * as S from './styles'
import useTaskStore from '@/store/zustand'
import Input from '../Input'
import Button from '../Button'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorMessage from '../ErrorMessage'

type EditTaskProps = {
  taskId: string
  setEditTaskId: (resetId: string) => void
}

const schema = z.object({
  editTaskField: z.string().min(1, 'Informe uma descrição para a tarefa.')
})

type ValidationSchemaType = z.infer<typeof schema>

const EditTask = ({ taskId, setEditTaskId }: EditTaskProps) => {
  const { taskList, changeTaskDescriptionById } = useTaskStore()

  const methods = useForm<ValidationSchemaType>({
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

  const handleEditTask: SubmitHandler<ValidationSchemaType> = (data) => {
    const { editTaskField } = data

    changeTaskDescriptionById(taskId, editTaskField)
    setEditTaskId('')
    reset()
  }

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(handleEditTask)}>
        <S.Wrapper>
          <Input name="editTaskField" />
          <Button color="blueCyan">Salvar</Button>
        </S.Wrapper>
        <ErrorMessage errors={errors} field="editTaskField" />
      </S.Form>
    </FormProvider>
  )
}

export default EditTask
