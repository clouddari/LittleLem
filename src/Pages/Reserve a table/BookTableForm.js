import React, { useState } from 'react';
import "./ReservationConfirmation.css";
import { fetchAPI, submitAPI } from '../../Components/api';
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
    time: true,
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
    if (new Date(date) < today) {
      return;
    }
    setFormData({ ...formData, date });
    try {
      const times = await fetchAPI(date);
      setBookedTimes(times);
      setAvailableTimes(times);  // Update available times based on the response
    } catch (error) {
      console.error("Error fetching available times:", error);
      setAvailableTimes([]);  // Optionally clear available times on error
    }
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
  if (name === "date") return !isNaN(new Date(value).getTime());
  if (name === "guests") return value >= 1 && value <= 20; // Validate guest count
  return true; // For other fields
};

const isFormValid = Object.values(validation).every(isValid => isValid) &&
                    Object.values(formData).every(value => value.trim() !== '') &&
                    formData.time && formData.guests >= 1 && formData.guests <= 20;

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2>Personal information</h2>
      <div className='input-name'>
      <label htmlFor="name">Name:</label>
      <input
       id="name"
       type="text"
       name="name"
       value={formData.name}
       onChange={handleChange}
       className={validation.name === false ? "invalid" : "valid"}
       required
/> </div>
       {validation.name === false && <small className="error">Name is required</small>}
       <div className='phone-email'>
        <div className='phone-form'>
      <label htmlFor="phone">Phone Number:</label>
      <input
      id="phone"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      className={validation.phone === false ? "invalid" : "valid"}
      pattern="[0-9]{10}"
      required/>
      {validation.phone === false && <small className="error">Phone is required. Format: 1234567890</small>}
      </div>
       <div className="email-form">
      <labe htmlFor="email">Email:</labe>
      <input
       id="email"
       type="email"
       name="email"
       value={formData.email}
       onChange={handleChange}
       className={validation.email === false ? "invalid" : "valid"}
       required />
       {validation.email === false && <small className="error">Please type the correct email</small>}
       </div>
       </div>

  <h2>Booking Details</h2>
  <div className='booking-details-form'>
  <div className='date-form'>
      <label htmlFor="date">Date:</label>
      <input
    id="date"
    type="date"
    name="date"
    value={formData.date}
    onChange={handleChange}
    className={validation.date ? "valid" : "invalid"}
    min={minDate}
    required
/>
</div>

<div className='time-form'>
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
      </div>

      <div className='guests-form'>
      <label>Number of Guests:</label>
      <input htmlFor="guests"
      className={validation.guests === false ? "invalid" : "valid"}
      id='guests'
      type="number"
       name="guests"
       value={formData.guests}
       onChange={handleChange}
       min="1" max="20" required />
       {validation.guests === false && <small className="error">From 1 to 20</small>}
       </div>

       <div className='occasion-form'>
      <label htmlFor="occasion">Occasion:</label>
      <select
      id="occasion"
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
      </div>
      </div>
      <button className="form-button" type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
};

export default BookTableForm;
