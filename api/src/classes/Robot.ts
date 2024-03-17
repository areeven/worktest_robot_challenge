import { PositionManager } from "./PositionManager";
import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";

export class Robot {
  public positionManager: PositionManager;
  private moveDirection: EnumeratedDirection;

  constructor(x_pos: number, y_pos: number, direction: EnumeratedDirection) {
    this.positionManager = new PositionManager(x_pos, y_pos);
    this.moveDirection = direction;
  }

  getCurrentPosition() {
    if (this.positionManager === null || this.positionManager === undefined) {
      throw new Error("Current position cannot be null or undefined");
    }
    return this.positionManager.getCurrentPosition();
  }

  getMoveDirection(): EnumeratedDirection {
    if (this.moveDirection === null || this.moveDirection === undefined) {
      throw new Error("Move direction cannot be null or undefined");
    }
    return this.moveDirection;
  }

  setMoveDirection(direction: EnumeratedDirection) {
    if (direction === null || direction === undefined) {
      throw new Error("Direction cannot be null or undefined");
    }
    this.moveDirection = direction;
  }

  moveLeft(steps: number) {
    if (!steps || steps < 0) {
      throw new Error("Invalid steps");
    }
    this.positionManager.moveLeft(steps);
  }

  moveRight(steps: number) {
    if (!steps || steps < 0) {
      throw new Error("Invalid steps");
    }
    this.positionManager.moveRight(steps);
  }

  moveUp(steps: number) {
    if (!steps || steps < 0) {
      throw new Error("Invalid steps");
    }
    this.positionManager.moveUp(steps);
  }

  moveDown(steps: number) {
    if (!steps || steps < 0) {
      throw new Error("Invalid steps");
    }
    this.positionManager.moveDown(steps);
  }
}
