import theme from '@/styles/theme'
import styled from 'styled-components'

type ButtonProps = {
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

export const Button = styled.button<ButtonProps>`
  background-color: ${({ color }) =>
    color === 'transparent' ? 'transparent' : theme.colors[color]};
  color: ${({ color }) =>
    color === 'transparent' || color === 'white'
      ? theme.colors.darkBlue
      : theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  max-height: 4.2rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.6rem;
`
