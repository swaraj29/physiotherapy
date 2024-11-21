import React, { useState } from "react";

const Header = ({ programName, setProgramName, combo, setCombo }) => {
  const handleClearAll = () => {
    setProgramName("");
    setCombo("");
  };

  return (
    <div className="mb-6 flex items-center space-x-8">
      {/* Program Name Input */}
      <div className="flex flex-col">
        <label className="text-lg font-semibold mb-2" htmlFor="programName">
          Programme Name
        </label>
        <input
          id="programName"
          type="text"
          placeholder="Enter Programme Name"
          value={programName}
          onChange={(e) => setProgramName(e.target.value)}
          className="program-name-input p-3 border rounded-md w-72"
        />
      </div>

      {/* Combo Selector */}
      <div className="flex flex-col">
        <label className="text-lg font-semibold mb-2" htmlFor="combo">
          Select Combo
        </label>
        <select
          id="combo"
          value={combo}
          onChange={(e) => setCombo(e.target.value)}
          className="combo-selector p-3 border rounded-md w-72"
        >
          <option value="">Select Combo</option>
          <option value="combo1">Combo 1</option>
          <option value="combo2">Combo 2</option>
        </select>
      </div>
      <button
        className="clear-all-button bg-green-500 text-white px-4 py-2 rounded-full"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
};

export default Header;
