import * as S from './styles'
import { ButtonProps } from './types'

const Button = ({ color, children, ...props }: ButtonProps) => (
  <S.Button color={color} {...props}>
    {children ?? 'Label do botão'}
  </S.Button>
)

export default Button
