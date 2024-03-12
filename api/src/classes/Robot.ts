import { PositionManager } from "./PositionManager";

export class Robot {
  private positionManager: PositionManager;

  constructor(x_pos: number, y_pos: number) {
    this.positionManager = new PositionManager(x_pos, y_pos);
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
