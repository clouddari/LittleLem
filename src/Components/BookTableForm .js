import React, { useState } from 'react';
import "../App.css";
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router';

const BookTableForm = () => {

  const navigate = useNavigate();
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

  const [bookedTimes, setBookedTimes]=useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const today = new Date();
  today.setDate(today.getDate()-1);
  const minDate = today.toISOString().split('T')[0];  // Format as YYYY-MM-DD
  
  const handleDateChange = async (e) => {
    const date = e.target.value;
    if (new Date(date) < today ) {
      alert("Date cannot be in the past");
      return;
    }
    setFormData({ ...formData, date });

    const times = await fetchAPI(date);
    const exampleBookedTimes = ["18:00", "20:00"]; // Replace with actual API data
    setBookedTimes(exampleBookedTimes);


    const filteredTimes = times.filter((time) => !exampleBookedTimes.includes(time));
    console.log('Filtered Times:', filteredTimes);
    setAvailableTimes(filteredTimes);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
    const success = await submitAPI(formData);
    if (success) {
      alert("Booking successful!");

      // Update booked times (persist to a server or local state)
      const updatedBookedTimes = [...bookedTimes, { date: formData.date, time: formData.time }];
      setBookedTimes(updatedBookedTimes); // Update state if local
      navigate('/booking-confirmation', { state: formData });
      } else {
        throw new Error("Booking Failed. Please try again.");
      }
  } catch (error){
    alert(error.message);
  }
};


  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Phone Number:</label>
      <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      pattern='[0-9]{10}0'
      title="Phone must be 10 digits" />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Date:</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleDateChange}
        required
        min={minDate} // Apply the min date here
/>

      <label htmlFor="time">Time:</label>
      <select id="time" name="time" value={formData.time} onChange={handleChange}  min ={minDate} required>
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
