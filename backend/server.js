const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const categoryRoutes = require("./routes/categoryRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const programRoutes = require("./routes/programRoutes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/programs", programRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
