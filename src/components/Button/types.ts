import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
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
