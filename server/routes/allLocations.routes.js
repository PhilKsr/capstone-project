import express from "express";
import {
  getAll,
  postLocation,
} from "../controllers/allLocations.controller.js";

const router = express.Router();

router.get("/", getAll);
router.post("/", postLocation);

export default router;
