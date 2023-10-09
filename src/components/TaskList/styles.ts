import styled from 'styled-components'

interface DescriptionProps {
  taskisfinished: boolean
}

export const Wrapper = styled.div`
  width: 100%;
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
`

export const Item = styled.li`
  height: auto;
  width: 100%;
  border-left: 0.3rem solid #00ecf1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
`

export const Description = styled.p<DescriptionProps>`
  font-size: 1.8rem;
  font-style: ${(props) => (props.taskisfinished ? 'italic' : 'normal')};
  text-decoration: ${(props) =>
    props.taskisfinished ? 'line-through' : 'none'};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
