const fs = require("fs");
const path = require("path");

const dataFilePath = path.join(__dirname, "../data/data.json");
const data = require("../data/data.json");

exports.saveProgram = (req, res) => {
  const { programName, exercises, notes } = req.body;

  if (!programName || !exercises) {
    return res.status(400).json({ message: "Program name and exercises are required" });
  }

  const newProgram = { programName, exercises, notes };
  data.programs.push(newProgram);

  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  res.status(201).json(newProgram);
};

exports.getPrograms = (req, res) => {
  res.json(data.programs);
};
