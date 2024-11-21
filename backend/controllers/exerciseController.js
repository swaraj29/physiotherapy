const data = require("../data/data.json");

exports.getExercises = (req, res) => {
  const { category } = req.query;
  const foundCategory = data.categories.find((cat) => cat.name === category);
  if (foundCategory) {
    res.json(foundCategory.exercises);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
};
