import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
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

export type ButtonStylesProps = {
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
