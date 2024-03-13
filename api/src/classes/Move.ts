import { Robot } from "./Robot";
import { EnumeratedDirection } from "../interfaces/EnumeratedDirection";
import { Board } from "./Board";

export class Move {
  private robot: Robot;
  private direction: EnumeratedDirection;
  private board: Board;

  constructor(
    commands: string[],
    x_pos: number,
    y_pos: number,
    initDirection: EnumeratedDirection,
    boardSize: { width: number; height: number }
  ) {
    this.robot = new Robot(x_pos, y_pos, initDirection);
    this.board = new Board(0, 0, boardSize.width, boardSize.height);
    this.direction = initDirection;
    this.executeCommands(commands);
  }

  public executeCommands(commands: string[]) {
    for (const command of commands) {
      if (!["f", "b", "l", "r"].includes(command)) {
        throw new Error(`Command ${command} is not valid`);
      }
      if (command === "f") {
        this.forward();
      } else if (command === "b") {
        this.back();
      } else if (command === "l") {
        this.left();
      } else if (command === "r") {
        this.right();
      }
    }
  }

  private checkBoundaries() {
    const currentPosition = this.robot.getCurrentPosition();
    const width = this.board.getWidth();
    const height = this.board.getHeight();
    if (currentPosition.x <= 0 || currentPosition.x >= width - 1 || currentPosition.y <= 0 || currentPosition.y >= height - 1) {
      return; // Stop further movement
    }
  }

  forward() {
    this.checkBoundaries();
    if (this.direction === EnumeratedDirection.north && this.robot.getCurrentPosition().y > 0) {
      this.robot.moveUp(1);
    } else if (this.direction === EnumeratedDirection.east && this.robot.getCurrentPosition().x < this.board.getWidth()) {
      this.robot.moveRight(1);
    } else if (this.direction === EnumeratedDirection.south && this.robot.getCurrentPosition().y < this.board.getHeight()) {
      this.robot.moveDown(1);
    } else if (this.direction === EnumeratedDirection.west && this.robot.getCurrentPosition().x > 0) {
      this.robot.moveLeft(1);
    }
  }

  back() {
    this.checkBoundaries();
    if (this.direction === EnumeratedDirection.north && this.robot.getCurrentPosition().y < this.board.getHeight() - 1) {
      this.robot.moveDown(1);
    } else if (this.direction === EnumeratedDirection.east && this.robot.getCurrentPosition().x > 0) {
      this.robot.moveLeft(1);
    } else if (this.direction === EnumeratedDirection.south && this.robot.getCurrentPosition().y > 0) {
      this.robot.moveUp(1);
    } else if (this.direction === EnumeratedDirection.west && this.robot.getCurrentPosition().x < this.board.getWidth() - 1) {
      this.robot.moveRight(1);
    }
  }

  left() {
    if (this.direction === EnumeratedDirection.north) {
      this.direction = EnumeratedDirection.west;
    } else if (this.direction === EnumeratedDirection.east) {
      this.direction = EnumeratedDirection.north;
    } else if (this.direction === EnumeratedDirection.south) {
      this.direction = EnumeratedDirection.east;
    } else if (this.direction === EnumeratedDirection.west) {
      this.direction = EnumeratedDirection.south;
    }
  }

  right() {
    if (this.direction === EnumeratedDirection.north) {
      this.direction = EnumeratedDirection.east;
    } else if (this.direction === EnumeratedDirection.east) {
      this.direction = EnumeratedDirection.south;
    } else if (this.direction === EnumeratedDirection.south) {
      this.direction = EnumeratedDirection.west;
    } else if (this.direction === EnumeratedDirection.west) {
      this.direction = EnumeratedDirection.north;
    }
  }

  getRobot() {
    return this.robot;
  }

  getDirection() {
    return this.direction;
  }
}
