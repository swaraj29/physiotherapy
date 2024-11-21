// src/components/Notes.js
import React from 'react';

const Notes = ({ notes, setNotes }) => {
  return (
    <div className="my-4">
      <label
        htmlFor="therapistNotes"
        className="block text-lg font-semibold mb-2"
      >
      </label>
      <textarea
        id="therapistNotes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows="4"
        placeholder="Enter notes here..."
        className="w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />
    </div>
  );
};

export default Notes;
