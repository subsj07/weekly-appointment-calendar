import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TimeSlot from './TimeSlot';

const DayColumn = ({ day, index, appointments }) => {
  return (
    <div className="day-column">
      <h3>{day.name}</h3>
      <Droppable droppableId={day.id} key={day.id}>
        {(provided) => (
          <div
            className="day-column-content"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
              {(appointments || []).map((appointment, index) => (
              <TimeSlot key={appointment.id} appointment={appointment} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DayColumn;
