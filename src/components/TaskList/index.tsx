'use client'

import * as S from './styles'
// import useTaskStore from '@/store/zustand'

const TaskList = () => {
  // const { taskList, changeTaskStatusById } = useTaskStore()
  const taskList = [{ id: 1, description: 'tarefa', status: false }]
  return (
    <S.Wrapper>
      <h1>TaskList</h1>
      <S.List>
        {taskList.map((task) => (
          <S.Item key={task.id}>
            <S.Description>{task.description}</S.Description>
            <S.CheckedTaskButton onClick={() => console.log(task.id)}>
              Concluir
            </S.CheckedTaskButton>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default TaskList
