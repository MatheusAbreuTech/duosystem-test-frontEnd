import * as S from './styles'
import TaskList from '../TaskList'
import AddTask from '../AddTask'
import TaskSearch from '../TaskSearch'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Title>Lista de tarefas</S.Title>

      {/* input de pesquisa */}
      <TaskSearch />

      {/* listagem */}
      <TaskList />

      {/* botao para adicionar umas task */}
      <AddTask />
    </S.Wrapper>
  )
}

export default Main
