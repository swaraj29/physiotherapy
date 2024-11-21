import React, { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';

import Header from "./components/Header";
import Tags from "./components/Tags";
import ExerciseList from "./components/ExerciseList";
import Controls from "./components/Controls";
import Notes from "./components/Notes";
import DaySelector from "./components/DaySelector";

const App = () => {
  const [programName, setProgramName] = useState("");
  const [combo, setCombo] = useState("");
  const [categories, setCategories] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleSaveProgram = () => {
    const program = { programName, exercises, notes };
    axios
      .post("http://localhost:5000/api/programs", program)
      .then((response) => {
        alert("Program saved successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to save program.");
      });
  };

  const handleClearAll = () => {
    setExercises([]);
    setProgramName("");
    setNotes("");
  };

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <Header
        programName={programName}
        setProgramName={setProgramName}
        combo={combo}
        setCombo={setCombo}
      />
      <Tags categories={categories} setExercises={setExercises} />
      <ExerciseList exercises={exercises} setExercises={setExercises} />
      <h3 className="text-xl font-semibold text-center mt-8 mb-4">Select Days of the Week</h3>
      <DaySelector />
      <h3 className="text-xl font-semibold mt-8 mb-4">Therapist Notes</h3>
      <Notes notes={notes} setNotes={setNotes} />
      <Controls
        onSaveProgram={handleSaveProgram}
        onClearAll={handleClearAll}
      />
    </div>
  );
};

export default App;
