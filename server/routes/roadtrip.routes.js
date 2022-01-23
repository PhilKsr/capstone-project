import express from "express";
import {
  getAllRoadtrips,
  postRoadtrip,
} from "../controllers/roadtrips.controller.js";

const router = express.Router();

router.post("/roadtrips", postRoadtrip);
router.get("/roadtrips", getAllRoadtrips);

export default router;
