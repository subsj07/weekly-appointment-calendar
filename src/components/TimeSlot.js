import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TimeSlot = ({ appointment, index }) => {
  return (
    <Draggable draggableId={appointment.id} index={index}>
      {(provided) => (
        <div
          className="time-slot"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="appointment-card">
            <strong>{appointment.title}</strong>
            <p>{appointment.startTime} - {appointment.endTime}</p>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TimeSlot;
