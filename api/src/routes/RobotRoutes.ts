import { RobotController } from "../controllers/RobotController";
import { Router } from "express";

const router = Router();

router.post("/move", RobotController.moveRobot);

export default router;
