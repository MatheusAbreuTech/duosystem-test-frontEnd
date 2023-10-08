import { FieldErrors } from 'react-hook-form'
import * as S from './styles'

interface ErrorMessageProps {
  errors: FieldErrors
  field: string
}

const ErrorMessage = ({ errors, field }: ErrorMessageProps) => {
  if (!errors[field]) {
    return null
  }
  return <S.Error>{errors[field]?.message?.toString()}</S.Error>
}

export default ErrorMessage
