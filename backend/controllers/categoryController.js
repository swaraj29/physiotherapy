const data = require("../data/data.json");

exports.getCategories = (req, res) => {
  res.json(data.categories);
};
