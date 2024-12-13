global.TextEncoder = require('util').TextEncoder;

import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import BookTableForm  from "./BookTableForm ";
import { fetchAPI } from './api';

test('renders the text on the button', () => {
  render(<BookTableForm />);
  const headingElement = screen.getByText("Book Table");
  expect(headingElement).toBeInTheDocument();
});

test("renders the default available times", () => {
    render(<BookTableForm />);
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  times.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
});
});


 // Test for updating availableTimes
 test('selecting a time updates the time in formData', () => {
    render(<BookTableForm  />);
    const dropdown = screen.getByRole('combobox', { name: /time/i });
    fireEvent.change(dropdown, { target: { value: '19:00' } });
    expect(dropdown.value).toBe('19:00'); // Verifying that the dropdown value is updated
  });

  jest.mock('./api'); // Mock fetchAPI function

test('calls fetchAPI and updates available times on date change', async () => {
  // Mock fetchAPI to return a non-empty array
  fetchAPI.mockResolvedValueOnce(['17:00', '18:00', '19:00']);
  
  render(<BookTableForm />);
  
  // Trigger date change
  const dateInput = screen.getByLabelText(/date/i);
  fireEvent.change(dateInput, { target: { value: '2024-12-10' } });
  
  // Assert fetchAPI was called
  expect(fetchAPI).toHaveBeenCalledWith('2024-12-10');
  
  // Assert available times are updated
  const timeOptions = await screen.findAllByRole('option');
  expect(timeOptions).toHaveLength(4); // Including the default "Select Time" option
});


