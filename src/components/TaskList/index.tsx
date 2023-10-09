'use client'

import { useState } from 'react'
import Button from '../Button'
import * as S from './styles'
import useTaskStore from '@/store/zustand'
import EditTask from '../EditTask'

const TaskList = () => {
  const { taskList, changeTaskStatusById, searchValue } = useTaskStore()
  const [editTaskId, setEditTaskId] = useState(0)

  const data = searchValue
    ? taskList.filter((task) =>
        task.description.toLowerCase().includes(searchValue.toLowerCase())
      )
    : taskList

  if (data.length === 0) {
    return <p>Nenhuma tarefa cadastrada</p>
  }

  return (
    <S.Wrapper>
      <S.List>
        {data.map((task) => {
          const formattedDate = new Date(task.createDate).toLocaleDateString(
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

              <p>{formattedDate}</p>
              <S.ButtonsWrapper>
                <Button onClick={() => changeTaskStatusById(task.id)}>
                  {task.status ? 'Desmarcar' : 'Concluir'}
                </Button>
                {editTaskId !== task.id && (
                  <Button onClick={() => setEditTaskId(task.id)}>Editar</Button>
                )}
              </S.ButtonsWrapper>
            </S.Item>
          )
        })}
      </S.List>
    </S.Wrapper>
  )
}

export default TaskList
