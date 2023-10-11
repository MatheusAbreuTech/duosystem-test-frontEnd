'use client'

import * as S from './styles'
import Input from '../Input'
import Button from '../Button'
import { FormProvider } from 'react-hook-form'

import ErrorMessage from '../ErrorMessage'
import { useEditTask } from './useEditTask'
import { EditTaskProps } from './types'

const EditTask = ({ taskId, setEditTaskId }: EditTaskProps) => {
  const { methods, errors, handleSubmit, handleEditTask } = useEditTask({
    taskId,
    setEditTaskId
  })

  return (
    <FormProvider {...methods}>
      <S.Form onSubmit={handleSubmit(handleEditTask)}>
        <S.Wrapper>
          <Input name="editTaskField" data-testId="editTaskField" />
          <Button type="submit" color="green" data-testId="editTaskButton">
            Salvar
          </Button>
        </S.Wrapper>
        <ErrorMessage errors={errors} field="editTaskField" />
      </S.Form>
    </FormProvider>
  )
}

export default EditTask
