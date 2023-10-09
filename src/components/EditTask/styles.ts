import theme from '@/styles/theme'
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > input {
    border: 1px solid ${theme.colors.black};
  }
`
