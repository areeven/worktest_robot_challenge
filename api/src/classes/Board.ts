import { Obstacle } from "./Obstacle";

export class Board {
  private xTopLeft: number;
  private yTopLeft: number;
  private width: number;
  private height: number;
  private obstacle: Obstacle;

  constructor(
    xTopLeft: number,
    yTopLeft: number,
    width: number,
    height: number,
    obstaclePosition?: { x: number; y: number }
  ) {
    this.xTopLeft = xTopLeft !== null && xTopLeft !== undefined ? xTopLeft : 0;
    this.yTopLeft = yTopLeft !== null && yTopLeft !== undefined ? yTopLeft : 0;
    this.width = width !== null && width !== undefined ? width : 0;
    this.height = height !== null && height !== undefined ? height : 0;
    this.obstacle = new Obstacle(obstaclePosition.x, obstaclePosition.y);
  }

  getTopLeftCorner(): { x: number; y: number } {
    return { x: this.xTopLeft, y: this.yTopLeft };
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getObstacle(): { x: number; y: number } {
    return {
      x: this.obstacle.getCurrentPosition().x,
      y: this.obstacle.getCurrentPosition().y,
    };
  }
}
