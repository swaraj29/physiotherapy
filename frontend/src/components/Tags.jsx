import React, { useState } from "react";

const Tags = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col gap-4 my-4">
      <div className="flex gap-4">
        {/* Render category tags */}
        {categories.map((category) => (
          <div
            key={category.id}
            className={`tag px-4 py-2 rounded cursor-pointer ${
              selectedCategory === category.name
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{selectedCategory} Exercises</h2>
          <div className="exercise-list mt-4">
            {categories
              .find((category) => category.name === selectedCategory)
              .exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="exercise-card bg-white p-4 mb-4 rounded-md shadow-md"
                >
                  <span>{exercise.name}</span>
                  <span> - {exercise.side}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tags;
