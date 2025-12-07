// backend/src/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import salesRouter from "./routes/sales.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/sales", salesRouter);
// uploadRoutes removed
// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
