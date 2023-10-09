import { fireEvent, render, waitFor } from '@testing-library/react'

import AddTask from '.'

describe('<AddTask />', () => {
  it('should render the AddTask component', () => {
    const { container } = render(<AddTask />)

    expect(container).toBeInTheDocument()
  })

  it('should call the submit function and clear the text field', async () => {
    const { getByLabelText, getByText } = render(<AddTask />)

    const input = getByLabelText('Adicionar tarefa:')

    fireEvent.change(input, { target: { value: 'Nova Tarefa' } })

    const addButton = getByText('Adicionar')

    fireEvent.click(addButton)

    await waitFor(() => {
      expect(input).toHaveValue('')
    })
  })
})
