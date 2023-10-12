import * as S from './styles'
import { useFormContext } from 'react-hook-form'
import { InputProps } from './types'

const Input = ({ name, type, id, dataTestid }: InputProps) => {
  const { register } = useFormContext()

  return (
    <S.Input type={type} id={id} data-testid={dataTestid} {...register(name)} />
  )
}

export default Input
