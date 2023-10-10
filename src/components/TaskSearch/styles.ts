import theme from '@/styles/theme'
import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 100%;
  height: 44px;
  padding-right: 1rem;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${theme.colors.black};
`

export const ButtonSearch = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
