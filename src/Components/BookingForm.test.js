import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import BookingForm from "./BookingForm";


test('renders the text on the button', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Table");
  expect(headingElement).toBeInTheDocument();
});

test("renders the default available times", () => {
    render(<BookingForm />);
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  times.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
});
});


 // Test for updating availableTimes
 test('selecting a time updates the time in formData', () => {
    render(<BookingForm />);
    
    const dropdown = screen.getByRole('combobox', { name: /time/i });
    fireEvent.change(dropdown, { target: { value: '19:00' } });
    
    expect(dropdown.value).toBe('19:00'); // Verifying that the dropdown value is updated
  });
