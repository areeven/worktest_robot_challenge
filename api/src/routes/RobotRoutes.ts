import { Router } from "express";
import { RobotController } from "../controllers/RobotController";

const router = Router();

router.post("/move", RobotController.moveRobot);

export default router;
