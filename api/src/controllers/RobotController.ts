import { Request, Response } from "express";
import Logger from "../utils/Logger";
import { Move } from "../classes/Move";
import { Board } from "../classes/Board";

export class RobotController {
  public static moveRobot = (req: Request, res: Response) => {
    try {
      const { commands, x_pos, y_pos, initDirection } = req.body;
      const { width, height, x, y, shape } = req.body;

      if (!commands || !x_pos || !y_pos || !initDirection) {
        return res.status(400).json({ error: "Invalid request parameters" });
      }

      const board = new Board(
        width,
        height,
        {
          x: x,
          y: y,
        },
        shape
      );

      const move = new Move(commands, x_pos, y_pos, initDirection, board);

      return res.status(200).json({
        board: board,
        position: move.getRobot().getCurrentPosition(),
        direction: move.getDirection(),
      });
    } catch (error) {
      Logger.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
