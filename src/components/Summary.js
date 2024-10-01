import React from 'react';
import { useSelector } from 'react-redux';

const Summary = () => {
  const appointments = useSelector((state) => state.appointments.appointments);

  return (
    <div>
      <h1>Upcoming Appointments</h1>
      <ul>
        {appointments.length === 0 ? (
          <li>No upcoming appointments</li>
        ) : (
          appointments.map((appointment) => (
            <li key={appointment._id}>
              <strong>{appointment.title}</strong> - {appointment.date} <br />
              {appointment.startTime} - {appointment.endTime}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Summary;
