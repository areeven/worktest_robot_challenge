import { PositionManager } from "./PositionManager";

export class Obstacle {
  public positionManager: PositionManager;

  constructor(x_pos: number, y_pos: number) {
    this.positionManager = new PositionManager(x_pos, y_pos);
  }

  getCurrentPosition() {
    if (this.positionManager === null || this.positionManager === undefined) {
      throw new Error("Current position cannot be null or undefined");
    }
    return this.positionManager.getCurrentPosition();
  }
}
