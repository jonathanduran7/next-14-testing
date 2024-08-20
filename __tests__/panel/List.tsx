import List from "@/app/panel/components/List"
import { render, screen } from "@testing-library/react"

it('renders a list of tasks', () => {
  const tasks = ['task 1', 'task 2', 'task 3']

  render(<List tasks={tasks} />)

  tasks.forEach(task => {
    expect(screen.getByText(task)).toBeInTheDocument()
  })
})
