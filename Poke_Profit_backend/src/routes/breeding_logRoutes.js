
import { Router } from "express";
import { 
    getBreedingLogs } from "../controllers/breeding_logControllers";

const router = Router()
router.get("/logs",getBreedingLogs)



export default router


