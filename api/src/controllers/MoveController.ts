import { Move } from "../classes/Move";
import { Request, Response } from "express";
import { Board } from "../classes/Board";

export class MoveController {
  public static moveRobot = (req: Request, res: Response) => {
    try {
      const { commands, x_pos, y_pos, initDirection, width, height, obstacle } =
        req.body;

      if (
        !commands ||
        !x_pos ||
        !y_pos ||
        !initDirection ||
        !width ||
        !height
      ) {
        return res.status(400).json({ error: "Invalid request parameters" });
      }

      const board = new Board(width, height, obstacle);
      const move = new Move(commands, x_pos, y_pos, initDirection, board);

      return res.status(200).json({
        board: board,
        position: move.getRobot().getCurrentPosition(),
        direction: move.getDirection(),
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}
