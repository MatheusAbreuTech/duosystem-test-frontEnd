import SearchTask from '../SearchTask'
import TaskList from '../TaskList'
import * as S from './styles'
import AddTask from '../AddTask'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Title>Lista de tarefas</S.Title>

      {/* input de pesquisa */}
      <SearchTask />

      {/* listagem */}
      <TaskList />

      {/* botao para adicionar umas task */}
      <AddTask />
    </S.Wrapper>
  )
}

export default Main
