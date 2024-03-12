import { Position } from "./Position";

export class Direction {
  private currentPosition: Position;

  constructor(x_pos: number, y_pos: number) {
    this.currentPosition = new Position(x_pos, y_pos);
  }
}
