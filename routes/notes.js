import express from "express";
import { createNote, getNotes } from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .post(protect, createNote)
  .get(protect, getNotes);

export default router; 