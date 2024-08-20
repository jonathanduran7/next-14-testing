import ClearButton from '@/app/panel/components/ClearButton';
import { render, screen, fireEvent } from '@testing-library/react';

test('calls resetList when the button is clicked', () => {
  const resetListMock = jest.fn();

  render(<ClearButton resetList={resetListMock} />);

  const buttonElement = screen.getByText('Clear');

  fireEvent.click(buttonElement);

  expect(resetListMock).toHaveBeenCalledTimes(1);
});
