'use client'

import { useEffect, useState } from 'react'
import Button from '../Button'
import * as S from './styles'
import useTaskStore from '@/store/zustand'
import EditTask from '../EditTask'
import { Task } from '@/types/Task'

type filters = 'all' | 'status' | 'createdDate'

const TaskList = () => {
  const {
    taskList,
    changeTaskStatusById,
    searchValue,
    removeTaskById,
    searchTasksByDescription
  } = useTaskStore()
  const [editTaskId, setEditTaskId] = useState('')
  const [data, setData] = useState<Task[]>(taskList)
  const [filterBy, setFilterBy] = useState<filters>('all')
  const [filterDirection, setFilterDirection] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    let copyData = [...taskList]

    if (filterBy === 'status') {
      copyData = copyData.filter((task) => task.status)
    } else if (filterBy === 'createdDate') {
      copyData = copyData.sort(
        (a, b) =>
          (filterDirection === 'asc' ? 1 : -1) *
          (b.createDate.getTime() - a.createDate.getTime())
      )
    }

    copyData = copyData.filter((task) =>
      task.description.toLowerCase().includes(searchValue.toLowerCase())
    )

    setData(copyData)
  }, [searchValue, filterBy, taskList, filterDirection])

  const handleFilterClick = (filter: filters) => {
    if (filter === filterBy) {
      setFilterDirection(filterDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setFilterBy(filter)
      setFilterDirection('asc')
    }

    if (filter === 'all') {
      searchTasksByDescription('')
      setData(taskList)
    }
  }

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
