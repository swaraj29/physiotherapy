const express = require("express");
const { getPrograms, saveProgram } = require("../controllers/programController");

const router = express.Router();

// Route to get saved programs
router.get("/", getPrograms);

// Route to save a new program
router.post("/", saveProgram);

module.exports = router;
