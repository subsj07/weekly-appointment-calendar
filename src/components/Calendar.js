import React, { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments, deleteAppointment, updateAppointment } from '../features/appointmentsSlice';
import moment from 'moment';

const Calendar = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const draggedAppointment = appointments[result.source.index];
    const newStartTime = result.destination.droppableId; 

  
    if (!moment(newStartTime, 'HH:mm', true).isValid()) {
      console.error('Invalid time format');
      return;
    }

    const updatedAppointment = {
      ...draggedAppointment,
      startTime: newStartTime,
      endTime: moment(newStartTime, 'HH:mm').add(moment(draggedAppointment.endTime, 'HH:mm').diff(moment(draggedAppointment.startTime, 'HH:mm')), 'milliseconds').format('HH:mm'),
    };

    dispatch(updateAppointment(updatedAppointment));
  };

  const handleDelete = (id) => {
    dispatch(deleteAppointment(id));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="appointments" direction="horizontal">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {appointments.map((appointment, index) => (
              <Draggable key={appointment._id} draggableId={appointment._id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      padding: '10px',
                      margin: '5px',
                      background: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      ...provided.draggableProps.style,
                    }}
                  >
                    <div>
                      <strong>{appointment.title}</strong> <br />
                      {moment(appointment.date).format('MMMM Do YYYY')}, {moment(appointment.startTime, 'HH:mm').format('h:mm A')} - {moment(appointment.endTime, 'HH:mm').format('h:mm A')}
                    </div>
                    <button onClick={() => handleDelete(appointment._id)}>Delete</button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Calendar;
