import { Request, Response } from "express";
import { Move } from "../classes/Move";
import { EnumeratedDirection } from "../utils/interfaces/Direction";
import Logger from "../utils/Logger";

export class RobotController {
  public static moveRobot(req: Request, res: Response): void {
    try {
      const { commands, x_pos, y_pos, initDirection, boardSize } = req.body;

      // Validate input
      if (!commands || !x_pos || !y_pos || !initDirection || !boardSize) {
        throw new Error("Missing required parameters");
      }

      // Create Move instance and execute commands
      const move = new Move(commands, x_pos, y_pos, initDirection, boardSize);
      const robot = move.getRobot();
      const direction = move.getDirection();

      res.status(200).json({ robot, direction });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
}
