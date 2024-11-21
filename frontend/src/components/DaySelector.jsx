import React, { useState } from 'react';

const DaySelector = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  
  const toggleDay = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day]
    );
  };

  // Days of the week
  const daysOfWeek = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

  return (
    <div className="day-selector-container">
      {daysOfWeek.map((day) => (
        <button
          key={day}
          className={`day-button ${selectedDays.includes(day) ? 'selected' : ''}`}
          onClick={() => toggleDay(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
