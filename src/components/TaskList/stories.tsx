import { Meta, StoryObj } from '@storybook/react'
import TaskList from '.'
import useTaskStore from '@/store/zustand'
import Button from '../Button'

export default {
  title: 'TaskList',
  component: TaskList
} as Meta

const Template = () => {
  const { addTask } = useTaskStore()

  return (
    <>
      <Button
        color="darkBlue"
        onClick={() =>
          addTask(`descrição da tarefa ${Math.floor(Math.random() * 100)}`)
        }
      >
        Adicionar tarefa
      </Button>
      <TaskList />
    </>
  )
}

export const Default: StoryObj = {}

export const TaskListWithTasks = Template.bind({})
