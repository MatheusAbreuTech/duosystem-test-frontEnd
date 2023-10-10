'use client'

import * as S from './styles'
import Image from 'next/image'
import useTaskStore from '@/store/zustand'
import Input from '../Input'
import { z } from 'zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorMessage from '../ErrorMessage'

const schema = z.object({
  searchValue: z.string().min(1, 'Insira um valor para pesquisar.')
})

type ValidationSchemaType = z.infer<typeof schema>

const TaskSearch = () => {
  const { searchTasksByDescription } = useTaskStore()

  const methods = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema)
  })

  const {
    handleSubmit,
    formState: { errors }
  } = methods

  const handleInputSearch: SubmitHandler<ValidationSchemaType> = (data) => {
    const { searchValue } = data

    searchTasksByDescription(searchValue)
  }

  return (
    <FormProvider {...methods}>
      <S.Wrapper onSubmit={handleSubmit(handleInputSearch)}>
        <Input placeholder="Pesquise uma tarefa..." name="searchValue" />

        <S.ButtonSearch type="submit">
          <Image src="/img/search.svg" alt="" width="20" height="20" />
        </S.ButtonSearch>
      </S.Wrapper>
      <ErrorMessage errors={errors} field="searchValue" />
    </FormProvider>
  )
}

export default TaskSearch
