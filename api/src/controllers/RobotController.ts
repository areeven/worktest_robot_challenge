import { Request, Response } from "express";
import { Move } from "../classes/Move";

export class MoveController {
  private move: Move;

  constructor(move: Move) {
    this.move = move;
  }

  moveForward(req: Request, res: Response) {
    this.move.forward();
    res.send("Robot moved forward successfully");
  }

  moveBackward(req: Request, res: Response) {
    this.move.back();
    res.send("Robot moved backward successfully");
  }

  turnLeft(req: Request, res: Response) {
    this.move.left();
    res.send("Robot turned left successfully");
  }

  turnRight(req: Request, res: Response) {
    this.move.right();
    res.send("Robot turned right successfully");
  }

  executeCommands(req: Request, res: Response) {
    const commands: string[] = req.body.commands;
    this.move.executeCommands(commands);
    res.send("Commands executed successfully");
  }
}
