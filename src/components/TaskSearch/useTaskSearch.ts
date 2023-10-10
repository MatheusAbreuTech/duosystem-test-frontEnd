import useTaskStore from '@/store/zustand'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ValidationSchemaType } from './types'
import { schema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useTaskSearch = () => {
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
  return {
    methods,
    errors,
    handleSubmit,
    handleInputSearch
  }
}
