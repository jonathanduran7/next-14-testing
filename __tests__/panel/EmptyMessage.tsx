import EmptyMessage from "@/app/panel/components/EmptyMessage"
import { render, screen } from "@testing-library/react"
import { init } from "next/dist/compiled/webpack/webpack"

it('it displays the message passes as a propr', () => {
  const testMessage = 'Probando'

  render(<EmptyMessage message={testMessage} />)
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})

it('it displays the default message when no message is passed', () => {
  render(<EmptyMessage />)
  expect(screen.getByText('Default message')).toBeInTheDocument()
})
