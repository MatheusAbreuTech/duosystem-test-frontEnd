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
  gap: 3rem;
  box-shadow: 0px 0px 20px 0px rgba(132, 132, 132, 0.2);

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const Description = styled.p<DescriptionProps>`
  font-size: 1.8rem;
  font-style: ${(props) => (props.taskisfinished ? 'italic' : 'normal')};
  text-decoration: ${(props) =>
    props.taskisfinished ? 'line-through' : 'none'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 300px;
  text-align: start;
`

export const InfosWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

export const FiltersWrapper = styled.div`
  max-width: 60%;
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    font-size: 1.6rem;
  }
`
