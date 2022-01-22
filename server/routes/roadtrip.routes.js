import express from "express";
import { postRoadtrip } from "../controllers/roadtrips.controller.js";

const router = express.Router();

router.post("/roadtrips", postRoadtrip);

export default router;
