import { MoveController } from "../controllers/MoveController";
import { Router } from "express";

const router = Router();

router.post("/move", MoveController.moveRobot);

export default router;
