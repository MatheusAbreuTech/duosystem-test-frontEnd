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
      <S.Form
        onSubmit={handleSubmit(handleEditTask)}
        data-testId={`editTaskComponent_${taskId}`}
      >
        <S.Wrapper>
          <Input name="editTaskField" data-testId={`editTaskField_${taskId}`} />
          <Button
            type="submit"
            color="green"
            label="Salvar"
            data-testId={`editTaskButton_${taskId}`}
          />
        </S.Wrapper>
        <ErrorMessage
          errors={errors}
          field="editTaskField"
          data-testId={`editTaskError_${taskId}`}
        />
      </S.Form>
    </FormProvider>
  )
}

export default EditTask
