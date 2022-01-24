import express from "express";
import {
  deleteOneRoadtrip,
  getAllRoadtrips,
  getOneRoadtrip,
  postRoadtrip,
  updateOneRoadtrip,
} from "../controllers/roadtrips.controller.js";

const router = express.Router();

router.post("/roadtrips", postRoadtrip);
router.get("/roadtrips", getAllRoadtrips);
router.get("/roadtrip", getOneRoadtrip);
router.delete("/roadtrips", deleteOneRoadtrip);
router.put("/roadtrips", updateOneRoadtrip);

export default router;
