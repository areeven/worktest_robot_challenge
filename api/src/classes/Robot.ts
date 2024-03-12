import { Position } from "./Position";

export class Robot {
  private currentPosition: Position;

  constructor(x_pos: number, y_pos: number) {
    this.currentPosition = new Position(x_pos, y_pos);
  }

  getCurrentPosition() {
    return this.currentPosition;
  }

  moveLeft(steps: number) {
    this.currentPosition.x -= steps;
  }

  moveRight(steps: number) {
    this.currentPosition.x += steps;
  }

  moveUp(steps: number) {
    this.currentPosition.y += steps;
  }

  moveDown(steps: number) {
    this.currentPosition.y -= steps;
  }
}
