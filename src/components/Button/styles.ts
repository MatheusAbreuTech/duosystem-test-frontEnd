import theme from '@/styles/theme'
import styled from 'styled-components'

type ButtonProps = {
  color: 'white' | 'black' | 'darkBlue' | 'lightBlue' | 'blueCyan' | 'red'
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ color }) => theme.colors[color]};
  color: ${theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  max-height: 4.2rem;
  height: 100%;
  cursor: pointer;
`
