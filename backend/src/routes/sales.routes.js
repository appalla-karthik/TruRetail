// backend/src/routes/sales.routes.js
import { Router } from "express";
import { getSales } from "../controllers/sales.controller.js";

const router = Router();

// GET /api/sales?search=&region=&gender=&ageMin=&ageMax=&page=&sortBy=&sortOrder=
router.get("/", getSales);

export default router;
