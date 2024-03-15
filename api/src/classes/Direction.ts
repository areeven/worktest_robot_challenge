import { PositionManager } from "./PositionManager";
import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";

export class Direction {
  private currentDirection: EnumeratedDirection;
  private positionManager: PositionManager;

  constructor(
    x_pos: number,
    y_pos: number,
    initialDirection: EnumeratedDirection = EnumeratedDirection.north
  ) {
    this.positionManager = new PositionManager(x_pos, y_pos);
    this.currentDirection = initialDirection;
  }

  getCurrentPosition(): EnumeratedDirection {
    if (this.positionManager === null || this.positionManager === undefined) {
      throw new Error("Current position cannot be null or undefined");
    }
    return this.currentDirection;
  }
}
