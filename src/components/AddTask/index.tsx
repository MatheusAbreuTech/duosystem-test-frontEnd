'use client'

import * as S from './styles'

import { FormProvider } from 'react-hook-form'
import Input from '../Input'
import Button from '../Button'
import ErrorMessage from '../ErrorMessage'
import { useAddTask } from './useAddTask'

const AddTask = () => {
  const { methods, errors, handleSubmit, handleAddTask } = useAddTask()

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
          <Button color="darkBlue" type="submit">
            Adicionar
          </Button>
        </S.InputWrapper>
      </S.Form>
      <ErrorMessage errors={errors} field="taskDescription" />
    </FormProvider>
  )
}

export default AddTask
