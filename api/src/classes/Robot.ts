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
    return this.positionManager.getCurrentPosition();
  }

  getMoveDirection(): EnumeratedDirection {
    return this.moveDirection;
  }

  setMoveDirection(direction: EnumeratedDirection) {
    this.moveDirection = direction;
  }

  moveLeft(steps: number) {
    this.positionManager.moveLeft(steps);
  }

  moveRight(steps: number) {
    this.positionManager.moveRight(steps);
  }

  moveUp(steps: number) {
    this.positionManager.moveUp(steps);
  }

  moveDown(steps: number) {
    this.positionManager.moveDown(steps);
  }
}
