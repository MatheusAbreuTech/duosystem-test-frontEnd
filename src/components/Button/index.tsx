import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

const Button = (props: ButtonProps) => (
  <S.Button {...props}>{props.children ?? 'Label do botão'}</S.Button>
)

export default Button
