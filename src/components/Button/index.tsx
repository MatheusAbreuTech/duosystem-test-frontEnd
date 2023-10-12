import * as S from './styles'
import { ButtonProps } from './types'

const Button = ({ color, label, ...props }: ButtonProps) => (
  <S.Button {...props} color={color}>
    {label ?? 'Label do botão'}
  </S.Button>
)

export default Button
