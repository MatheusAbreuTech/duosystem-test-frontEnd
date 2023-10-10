import theme from '@/styles/theme'
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.5rem;

  > label {
    font-size: 1.6rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  > input {
    border: 1px solid ${theme.colors.black};
  }
`
