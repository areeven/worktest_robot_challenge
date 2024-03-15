import { Obstacle } from "./Obstacle";

export class Board {
  private width: number;
  private height: number;
  private obstacle: Obstacle;

  constructor(
    width: number,
    height: number,
    obstaclePosition: { x: number; y: number }
  ) {
    this.width = width !== null && width !== undefined ? width : 0;
    this.height = height !== null && height !== undefined ? height : 0;
    this.obstacle = new Obstacle(obstaclePosition.x, obstaclePosition.y);
  }

  getWidth(): number {
    if (this.width < 0) {
      throw new Error("Width cannot be negative");
    }
    return this.width;
  }

  getHeight(): number {
    if (this.height < 0) {
      throw new Error("Height cannot be negative");
    }
    return this.height;
  }

  getObstacle(): { x: number; y: number } {
    if (this.obstacle === null || this.obstacle === undefined) {
      throw new Error("Obstacle cannot be null or undefined");
    }
    return {
      x: this.obstacle.getCurrentPosition().x,
      y: this.obstacle.getCurrentPosition().y,
    };
  }
}
