import { PositionManager } from './PositionManager';

export class Obstacle {
  public positionManager: PositionManager;

  constructor(x_pos: number, y_pos: number) {
    this.positionManager = new PositionManager(x_pos, y_pos);
  }

  getCurrentPosition() {
    return this.positionManager.getCurrentPosition();
  }
}