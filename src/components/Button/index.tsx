import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  color:
    | 'white'
    | 'black'
    | 'darkBlue'
    | 'lightBlue'
    | 'blueCyan'
    | 'red'
    | 'transparent'
}

const Button = ({ children, color, ...props }: ButtonProps) => (
  <S.Button {...props} color={color}>
    {children ?? 'Label do botão'}
  </S.Button>
)

export default Button
