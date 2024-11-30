import React, { useState } from 'react';
import "../App.css";

const BookTableForm = () => {
  // Declare state variables
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic, e.g., API call here
  };

  // Ensure date is not in the past
  const handleDateChange = (e) => {
    const date = e.target.value;
    if (new Date(date) < new Date()) {
      alert("Date cannot be in the past");
    } else {
      setFormData({ ...formData, date });
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Phone Number:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Date:</label>
      <input type="date" name="date" value={formData.date} onChange={handleDateChange} required />

      <label htmlFor="time">Time:</label>
      <select id="time" name="time" value={formData.time} onChange={handleChange} required>
        <option value="">Select Time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label>Number of Guests:</label>
      <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="20" required />

      <label>Occasion:</label>
      <select name="occasion" value={formData.occasion} onChange={handleChange} required>
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button className="form-button" type="submit">Book Table</button>
    </form>
  );
};

export default BookTableForm;
