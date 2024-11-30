import { render, screen } from '@testing-library/react';
import Main from "./Main";

test('renders the alt text', () => {
  render(<Main />);
  const text = screen.getByAltText("reserve a table section");
  expect(text).toBeInTheDocument();
});
