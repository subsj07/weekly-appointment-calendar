import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment } from '../features/appointmentsSlice';


const AppointmentForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const newAppointment = {
      title,
      date: new Date(date).toISOString(), 
      startTime,
      endTime,   
      description,
    };

  
    dispatch(addAppointment(newAppointment));
    setTitle('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setDescription('');
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Add Appointment</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;
