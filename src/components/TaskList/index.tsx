'use client'

import Button from '../Button'
import * as S from './styles'
import EditTask from '../EditTask'
import { useTaskList } from './useTaskList'
import useTaskStore from '@/store/zustand'

const TaskList = () => {
  const { data, editTaskId, setEditTaskId, handleFilterClick } = useTaskList()
  const { changeTaskStatusById, removeTaskById } = useTaskStore()

  return (
    <S.Wrapper>
      <S.FiltersWrapper>
        <span>Filtrar por: </span>
        <Button
          color="transparent"
          onClick={() => handleFilterClick('all')}
          data-testId="BtnFilterByAll"
          label="Todas"
        />
        <Button
          color="transparent"
          onClick={() => handleFilterClick('status')}
          data-testId="BtnFilterByStatus"
          label="Concluidas"
        />
        <Button
          color="transparent"
          onClick={() => handleFilterClick('createdDate')}
          data-testId="BtnFilterCreatedDate"
          label="Data de criação"
        />
      </S.FiltersWrapper>

      {data.length > 0 ? (
        <S.List data-testId="list-data">
          {data.map((task) => {
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
                    color="green"
                    onClick={() => changeTaskStatusById(task.id)}
                    data-testId={`changeStatusButton_${task.id}`}
                    label={`${task.status ? 'Desmarcar' : 'Concluir'}`}
                  />
                  {editTaskId !== task.id && (
                    <Button
                      color="darkBlue"
                      onClick={() => setEditTaskId(task.id)}
                      data-testId={`editButton_${task.id}`}
                      label="Editar"
                    />
                  )}
                  <Button
                    color="red"
                    onClick={() => removeTaskById(task.id)}
                    data-testId={`removeTaskButton_${task.id}`}
                    label="Excluir"
                  />
                </S.InfosWrapper>
              </S.Item>
            )
          })}
        </S.List>
      ) : (
        <p>Nenhuma tarefa encontrada</p>
      )}
    </S.Wrapper>
  )
}

export default TaskList
