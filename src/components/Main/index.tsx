import SearchTask from '../SearchTask'
import TaskList from '../TaskList'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Title>Lista de tarefas</S.Title>

    {/* input de pesquisa */}
    <SearchTask />

    {/* listagem */}
    <TaskList tasks={[{ id: 1, text: 'tarefa 1' }]} />

    {/* botao para adicionar umas task */}
    <button>Adicionar task</button>
  </S.Wrapper>
)

export default Main
