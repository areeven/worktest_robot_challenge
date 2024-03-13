import { PositionManager } from "./PositionManager";
import { Direction, EnumeratedDirection } from "./Direction";

export class Robot {
  private positionManager: PositionManager;
  private moveDirection: Direction;

  constructor(x_pos: number, y_pos: number) {
    this.positionManager = new PositionManager(x_pos, y_pos);
    this.moveDirection = new Direction(x_pos, y_pos, EnumeratedDirection.north);
  }

  getCurrentPosition() {
    return this.positionManager.getCurrentPosition();
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
