import { Request, Response } from "express";
import Logger from "../utils/Logger";
import { Move } from "../classes/Move";

export const moveRobot = (req: Request, res: Response) => {
  try {
    const { commands, x_pos, y_pos, initDirection, boardSize } = req.body;

    if (!commands || !x_pos || !y_pos || !initDirection || !boardSize) {
      return res.status(400).json({ error: "Invalid request parameters" });
    }

    const move = new Move(commands, x_pos, y_pos, initDirection, boardSize);

    return res.status(200).json({
      position: move.getRobot().getCurrentPosition(),
      direction: move.getDirection(),
    });
  } catch (error) {
    Logger.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
