import theme from '@/styles/theme'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  formAction?: string
  color:
    | 'white'
    | 'black'
    | 'darkBlue'
    | 'lightBlue'
    | 'blueCyan'
    | 'red'
    | 'green'
    | 'transparent'
}

export interface ButtonStylesProps {
  theme: typeof theme
  color:
    | 'white'
    | 'black'
    | 'darkBlue'
    | 'lightBlue'
    | 'blueCyan'
    | 'red'
    | 'green'
    | 'transparent'
}
