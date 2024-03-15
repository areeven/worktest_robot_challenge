import { Obstacle } from "./Obstacle";

export class Board {
  private width: number;
  private height: number;
  private obstacle: Obstacle;
  private shape: string;

  constructor(
    width: number,
    height: number,
    obstaclePosition: { x: number; y: number },
    shape: string
  ) {
    this.width = width !== null && width !== undefined ? width : 0;
    this.height = height !== null && height !== undefined ? height : 0;
    this.obstacle = new Obstacle(obstaclePosition.x, obstaclePosition.y);
    this.shape = shape;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getShape(): string {
    return this.shape;
  }

  getObstacle(): { x: number; y: number } {
    return {
      x: this.obstacle.getCurrentPosition().x,
      y: this.obstacle.getCurrentPosition().y,
    };
  }
}
