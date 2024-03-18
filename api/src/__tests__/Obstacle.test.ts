import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";
import { Move } from "../classes/Move";
import { Board } from "../classes/Board";

afterEach(() => {
  console.log("Test Done");
});

describe("Test robot colliding with obstacle", () => {
  test("Robot collides with obstacle and stops", () => {
    const board = new Board(5, 5, { x: 2, y: 2 });
    const move = new Move(
      ["l", "f", "f", "r", "f", "f"],
      0,
      0,
      EnumeratedDirection.south,
      board
    );
    const robot = move.getRobot();
    const obstacle = board.getObstacle();
    expect(robot).not.toEqual(obstacle);
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 2, y: 1 });
  });
});

describe("Test robot collision", () => {
  test("Robot collides with obstacle", () => {
    const board = new Board(5, 5, { x: 2, y: 2 });
    const move = new Move(
      ["f", "f", "r", "f", "f"],
      0,
      0,
      EnumeratedDirection.east,
      board
    );
    const robot = move.getRobot().getCurrentPosition();
    expect(board.getObstacle()).not.toEqual(robot);
    expect(robot).toEqual({ x: 2, y: 1 });
  });
});
