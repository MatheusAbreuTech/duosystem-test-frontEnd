'use client'

import * as S from './styles'
import Input from '../Input'
import { FormProvider } from 'react-hook-form'
import ErrorMessage from '../ErrorMessage'
import { useTaskSearch } from './useTaskSearch'

const TaskSearch = () => {
  const { methods, errors, handleSubmit, handleInputSearch } = useTaskSearch()

  return (
    <FormProvider {...methods}>
      <S.Wrapper onSubmit={handleSubmit(handleInputSearch)}>
        <Input placeholder="Pesquise uma tarefa..." name="searchValue" />

        <S.ButtonSearch type="submit">
          <img src="/img/search.svg" alt="" width="20" height="20" />
        </S.ButtonSearch>
      </S.Wrapper>
      <ErrorMessage errors={errors} field="searchValue" />
    </FormProvider>
  )
}

export default TaskSearch
