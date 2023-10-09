import { InputHTMLAttributes } from 'react'
import * as S from './styles'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input = (props: InputProps) => {
  const { register } = useFormContext()

  return <S.Input id={props.name} {...props} {...register(props.name)} />
}

export default Input
