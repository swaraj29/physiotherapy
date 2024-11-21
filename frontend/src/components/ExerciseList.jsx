import React, { useState } from 'react';

const ExerciseList = ({ exercises, setExercises }) => {
  const addExercise = () => {
    setExercises([...exercises, { name: "", sets: "", reps: "", holdTime: "", side: "Left" }]);
  };

  const handleInputChange = (e, index, field) => {
    const newExercises = [...exercises];
    newExercises[index][field] = e.target.value;
    setExercises(newExercises);
  };

  const toggleSide = (index) => {
    const newExercises = [...exercises];
    newExercises[index].side = newExercises[index].side === "Left" ? "Right" : "Left";
    setExercises(newExercises);
  };

  return (
    <div>
      <button 
        onClick={addExercise} 
        className="add-exercise"
      >
        Add Exercise
      </button>

      {exercises.map((exercise, index) => (
        <div key={index} className="exercise-card">
          <input
            type="text"
            placeholder="Exercise Name"
            className="input-field"
            value={exercise.name}
            onChange={(e) => handleInputChange(e, index, 'name')}
          />
          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Sets"
              className="input-field"
              value={exercise.sets}
              onChange={(e) => handleInputChange(e, index, 'sets')}
            />
            <input
              type="number"
              placeholder="Reps"
              className="input-field"
              value={exercise.reps}
              onChange={(e) => handleInputChange(e, index, 'reps')}
            />
            <input
              type="number"
              placeholder="Hold Time"
              className="input-field"
              value={exercise.holdTime}
              onChange={(e) => handleInputChange(e, index, 'holdTime')}
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => toggleSide(index)}
              className="side-toggle-button"
            >
              {exercise.side}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
