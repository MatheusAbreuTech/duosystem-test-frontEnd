import theme from '@/styles/theme'
import styled from 'styled-components'
import { ButtonStylesProps } from './types'

export const Button = styled.button<ButtonStylesProps>`
  background-color: ${({ color }) =>
    color === 'transparent' ? 'transparent' : theme.colors[color]};
  color: ${({ color }) =>
    color === 'transparent' ? theme.colors.darkBlue : theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  max-height: 4.2rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.6rem;
`
