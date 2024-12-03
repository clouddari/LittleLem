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

  const [validation, setValidation] = useState({
    name: true,
    phone: true,
    email: true,
    date: true,
  });

  const [availableTimes, setAvailableTimes] = useState([
    "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
  ]);

  const [bookedTimes, setBookedTimes]=useState([]);

  const today = new Date();
  today.setDate(today.getDate());
  const minDate = today.toISOString().split('T')[0];  // Format as YYYY-MM-DD


  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanedValue = name === "phone" ? value.replace(/\s+/g, '') : value;
    setFormData({ ...formData, [name]: cleanedValue });
    setValidation((prevValidation) => ({
      ...prevValidation,
      [name]: validateField(name, value),
    }));
  };
  const handleDateChange = async (e) => {
    const date = e.target.value;
    if (new Date(date) < today ) {
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

const validateField = (name, value) => {
  if (name === "phone") return /[0-9]{10}/.test(value);
  if (name === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (name === "name") return value.trim().length > 0; // Basic non-empty validation
  if (name === "date") return new Date(value);
  if (name === "guests") return value >= 1 && value <= 20; // Validate guest count
  return true; // For other fields
};

const isFormValid = Object.values(validation).every(isValid => isValid) && Object.values(formData).every(value => value.trim() !== '');

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
       type="text"
       name="name"
       value={formData.name}
       onChange={handleChange}
       className={validation.name === false ? "invalid" : "valid"}
       required
/>
       {validation.name === false && <small className="error">Name is required</small>}


      <label>Phone Number:</label>

      <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className={validation.phone === false ? "invalid" : "valid"}
      pattern="[0-9]{10}"
      required/>
      {validation.phone === false && <small className="error">Phone is required. Format: 1234567890</small>}


      <label>Email:</label>
      <input
       type="email"
       name="email"
       value={formData.email}
       onChange={handleChange}
       className={validation.email === false ? "invalid" : "valid"}
       required />
       {validation.email === false && <small className="error">Please type the correct email</small>}

      <label>Date:</label>
      <input
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    className={validation.date ? "valid" : "invalid"}
    min={minDate}
    required
/>
      <label htmlFor="time">Time:</label>
      <select
      id="time"
      name="time"
      value={formData.time}
      onChange={handleChange}
      className={validation.time === false ? "invalid" : "valid"}
      min ={minDate}
      required>
        <option value="">Select Time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {validation.time === false && <small className="error">Please choose available time. </small>}

      <label>Number of Guests:</label>
      <input
      className={validation.guests === false ? "invalid" : "valid"}
      type="number"
       name="guests"
       value={formData.guests}
       onChange={handleChange}
       min="1" max="20" required />
       {validation.guests === false && <small className="error">Allowed amount of guests is from 1 to 20.</small>}

      <label>Occasion:</label>
      <select
      name="occasion"
      value={formData.occasion}
      onChange={handleChange}
      className={validation.time === false ? "invalid" : "valid"}
      required>
        <option value="">Select Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {validation.occasion === false && <small className="error">Choose the occasion.</small>}

      <button className="form-button" type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
};

export default BookTableForm;
