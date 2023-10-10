import * as S from './styles'
import { useFormContext } from 'react-hook-form'
import { InputProps } from './types'

const Input = ({ name, ...props }: InputProps) => {
  const { register } = useFormContext()

  return <S.Input id={name} {...props} {...register(name)} />
}

export default Input
