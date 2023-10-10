import * as S from './styles'
import { ButtonProps } from './types'

const Button = ({ children, color, ...props }: ButtonProps) => (
  <S.Button {...props} color={color}>
    {children ?? 'Label do botão'}
  </S.Button>
)

export default Button
