import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

// Middleware FIRST
app.use(cors());
app.use(express.json());

// Routes SECOND
app.use("/api", uploadRoutes);

// Root Route
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "🚀 InsightLoop AI Backend is Running!",
    version: "1.0.0",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});