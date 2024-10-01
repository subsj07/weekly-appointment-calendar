import { useDispatch } from 'react-redux';
import { deleteAppointment } from '../features/appointmentsSlice';

const AppointmentCard = ({ appointment }) => {
    const dispatch = useDispatch();
  
    const handleDelete = () => {
      dispatch(deleteAppointment(appointment.id)); // Redux action to delete
    };
  
    return (
      <div>
        <h3>{appointment.title}</h3>
        <p>{appointment.startTime} - {appointment.endTime}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  };
  
  export default AppointmentCard