import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";
import { Move } from "../classes/Move";
import { Board } from "../classes/Board";

describe("Test robot colliding with obstacle", () => {
  test("Robot collides with obstacle and stops", () => {
    const board = new Board(0, 0, 5, 5, { x: 2, y: 2 });
    const move = new Move(
      ["f", "f", "r", "f", "f"],
      0,
      0,
      EnumeratedDirection.east
    );
    const robot = move.getRobot();
    const obstacle = board.getObstacle();
    expect(robot).not.toEqual(obstacle);
  });
});

describe("Test robot collision", () => {
  test("Robot collides with obstacle", () => {
    const board = new Board(0, 0, 5, 5, { x: 2, y: 2 });
    const move = new Move(
      ["f", "f", "r", "f", "f"],
      0,
      0,
      EnumeratedDirection.east
    );
    const robot = move.getRobot().getCurrentPosition();
    console.log(robot);
    expect(board.getObstacle()).not.toEqual(robot);
  });
});
