'use client'

import Button from '../Button'
import * as S from './styles'
import EditTask from '../EditTask'
import { useTaskList } from './useTaskList'

const TaskList = () => {
  const {
    data,
    editTaskId,
    handleFilterClick,
    setEditTaskId,
    changeTaskStatusById,
    removeTaskById
  } = useTaskList()

  return (
    <S.Wrapper>
      <S.FiltersWrapper>
        <span>Filtrar por: </span>
        <Button color="transparent" onClick={() => handleFilterClick('all')}>
          Todas
        </Button>
        <Button color="transparent" onClick={() => handleFilterClick('status')}>
          Concluidas
        </Button>
        <Button
          color="transparent"
          onClick={() => handleFilterClick('createdDate')}
        >
          Data de criação
        </Button>
      </S.FiltersWrapper>

      <S.List>
        {data.length > 0 ? (
          data.map((task) => {
            const formattedDate = new Date(task.createDate).toLocaleString(
              'pt-BR'
            )
            return (
              <S.Item key={task.id}>
                {editTaskId === task.id ? (
                  <EditTask taskId={task.id} setEditTaskId={setEditTaskId} />
                ) : (
                  <S.Description taskisfinished={task.status}>
                    {task.description}
                  </S.Description>
                )}

                <S.InfosWrapper>
                  <p>{formattedDate}</p>
                  <Button
                    color="black"
                    onClick={() => changeTaskStatusById(task.id)}
                  >
                    {task.status ? 'Desmarcar' : 'Concluir'}
                  </Button>
                  {editTaskId !== task.id && (
                    <Button
                      color="darkBlue"
                      onClick={() => setEditTaskId(task.id)}
                    >
                      Editar
                    </Button>
                  )}
                  <Button color="red" onClick={() => removeTaskById(task.id)}>
                    Excluir
                  </Button>
                </S.InfosWrapper>
              </S.Item>
            )
          })
        ) : (
          <p>Nenhuma tarefa encontrada</p>
        )}
      </S.List>
    </S.Wrapper>
  )
}

export default TaskList
