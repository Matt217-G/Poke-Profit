import { Router } from "express";
import {
  getBreedingLogs,
  postBreedingLogs,
} from "../controllers/breeding_logControllers";

const router = Router();
router.get("/logs", getBreedingLogs);

router.post("/logs", postBreedingLogs);

export default router;
