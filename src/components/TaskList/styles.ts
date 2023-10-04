import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
`

export const Item = styled.li`
  height: 4.2rem;
  width: 100%;
  border-left: 0.3rem solid #00ecf1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 5px;
  padding: 0 1rem;
  color: #0c2e73;
  font-size: 1.8rem;
`

export const CheckedTaskButton = styled.button`
  background-color: #0c2e73;
  height: 2.4rem;
  width: 9.4rem;
  border: none;
  border-radius: 3px;
  color: #fff;
  text-transform: uppercase;
`
