const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const authRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 50000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
