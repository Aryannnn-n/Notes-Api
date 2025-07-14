import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", authRoutes);
app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("Notes API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 