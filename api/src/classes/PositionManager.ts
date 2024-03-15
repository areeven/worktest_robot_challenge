import { Position } from "./Position";

export class PositionManager {
  private currentPosition: Position;

  constructor(x_pos: number, y_pos: number) {
    this.currentPosition = new Position(x_pos, y_pos);
  }

  getCurrentPosition() {
    if (this.currentPosition === null || this.currentPosition === undefined) {
      throw new Error("Current position cannot be null or undefined");
    }
    return this.currentPosition;
  }

  moveLeft(steps: number) {
    if (this.currentPosition.x - steps < 0) {
      throw new Error("Cannot move left, out of bounds");
    }
    this.currentPosition.x -= steps;
  }

  moveRight(steps: number) {
    if (this.currentPosition.x + steps < 0) {
      throw new Error("Cannot move right, out of bounds");
    }
    this.currentPosition.x += steps;
  }

  moveUp(steps: number) {
    if (this.currentPosition.y - steps < 0) {
      throw new Error("Cannot move up, out of bounds");
    }
    this.currentPosition.y -= steps;
  }

  moveDown(steps: number) {
    if (this.currentPosition.y + steps < 0) {
      throw new Error("Cannot move down, out of bounds");
    }
    this.currentPosition.y += steps;
  }
}
