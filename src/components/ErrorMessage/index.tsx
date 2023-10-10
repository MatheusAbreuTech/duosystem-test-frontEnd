import * as S from './styles'
import { ErrorMessageProps } from './types'

const ErrorMessage = ({ errors, field }: ErrorMessageProps) => {
  if (!errors[field]) {
    return null
  }
  return <S.Error>{errors[field]?.message?.toString()}</S.Error>
}

export default ErrorMessage
