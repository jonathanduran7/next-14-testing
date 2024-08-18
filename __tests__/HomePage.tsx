import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

it("renders home page", () => {
  render(<Home />);

  const getStarted = screen.getByText(/Get started by editing/);
  expect(getStarted).toBeInTheDocument();
})
