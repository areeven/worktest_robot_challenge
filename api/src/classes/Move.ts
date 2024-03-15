import { Robot } from "./Robot";
import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";
import { Board } from "./Board";

export class Move {
  private robot: Robot;
  private direction: EnumeratedDirection;
  private board: Board;

  constructor(
    commands: string[],
    x_pos: number,
    y_pos: number,
    initDirection: EnumeratedDirection
  ) {
    this.robot = new Robot(x_pos, y_pos, initDirection);
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
    const currentPosition = this.getRobot().getCurrentPosition();
    this.board = new Board(0, 0, 5, 5, { x: 2, y: 2 });
    const width = this.board.getWidth();
    const height = this.board.getHeight();
    const obstaclePosition = this.board.getObstacle();

    // Check if the current position is out of bounds or collides with an obstacle
    if (
      currentPosition.x < 0 ||
      currentPosition.x >= width - 1 ||
      currentPosition.y < 0 ||
      currentPosition.y >= height - 1
    ) {
      return false; // Return false to indicate collision or out of bounds
    }

    return true; // Return true if the position is within bounds and doesn't collide
  }

  private robotPosition() {
    this.getRobot().getCurrentPosition();
    console.log(
      `Current Position of robot: x: ${this.robot.getCurrentPosition().x}, y: ${
        this.robot.getCurrentPosition().y
      }`
    );
  }

  forward() {
    this.checkBoundaries();
    if (
      this.direction === EnumeratedDirection.north &&
      this.robot.getCurrentPosition().y > 0
    ) {
      this.robot.moveUp(1);
      this.robotPosition();
      if (
        this.getRobot().getCurrentPosition().y === this.board.getObstacle().y
      ) {
        this.robot.moveDown(1);
      }
    } else if (
      this.direction === EnumeratedDirection.east &&
      this.robot.getCurrentPosition().x < this.board.getWidth()
    ) {
      this.robot.moveRight(1);
      this.robotPosition();
      if (this.robot.getCurrentPosition().x === this.board.getObstacle().x) {
        this.robot.moveLeft(1);
      }
    } else if (
      this.direction === EnumeratedDirection.south &&
      this.robot.getCurrentPosition().y < this.board.getHeight()
    ) {
      this.robot.moveDown(1);
      this.robotPosition();
      if (this.robot.getCurrentPosition().y === this.board.getObstacle().y) {
        this.robot.moveUp(1);
      }
    } else if (
      this.direction === EnumeratedDirection.west &&
      this.robot.getCurrentPosition().x > 0
    ) {
      this.robot.moveLeft(1);
      this.robotPosition();
      if (this.robot.getCurrentPosition().x === this.board.getObstacle().x) {
        this.robot.moveRight(1);
      }
    }
  }

  back() {
    this.checkBoundaries();
    if (
      this.direction === EnumeratedDirection.north &&
      this.robot.getCurrentPosition().y < this.board.getHeight() - 1
    ) {
      if (this.robot.getCurrentPosition().y === this.board.getObstacle().y) {
        this.robot.moveUp(1);
      }
      this.robot.moveDown(1);
    } else if (
      this.direction === EnumeratedDirection.east &&
      this.robot.getCurrentPosition().x > 0
    ) {
      if (this.robot.getCurrentPosition().x === this.board.getObstacle().x) {
        this.robot.moveRight(1);
      }
      this.robot.moveLeft(1);
    } else if (
      this.direction === EnumeratedDirection.south &&
      this.robot.getCurrentPosition().y > 0
    ) {
      if (this.robot.getCurrentPosition().y === this.board.getObstacle().y) {
        this.robot.moveDown(1);
      }
      this.robot.moveUp(1);
    } else if (
      this.direction === EnumeratedDirection.west &&
      this.robot.getCurrentPosition().x < this.board.getWidth() - 1
    ) {
      if (this.robot.getCurrentPosition().x === this.board.getObstacle().x) {
        this.robot.moveLeft(1);
      }
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
