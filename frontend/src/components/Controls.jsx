// src/components/Controls.js
import React from 'react';

const Controls = ({ onSaveProgram, onClearAll }) => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      
      <button
        onClick={onSaveProgram}
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out"
      >
        Save Program
      </button>

      
      <button
        onClick={onClearAll}
        className="px-6 py-3 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-00 focus:outline-none focus:ring-2 focus:ring-rose-300 transition duration-300 ease-in-out"
      >
        Clear All
      </button>
    </div>
  );
};

export default Controls;
