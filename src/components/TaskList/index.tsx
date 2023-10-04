'use client'

import * as S from './styles'

type Task = {
  text: string
  id: number
}

type TaskListProps = {
  tasks: Task[]
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <S.Wrapper>
      <S.List>
        {tasks.map((task) => (
          <S.Item key={task.id}>
            {task.text} <S.CheckedTaskButton>Concluir</S.CheckedTaskButton>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  )
}

export default TaskList
