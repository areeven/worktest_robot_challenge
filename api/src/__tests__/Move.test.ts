import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";
import { Move } from "../classes/Move";
import { Board } from "../classes/Board";

describe("Test movements across the board and limitations", () => {
  test("Robot moves forward, to the south", () => {
    const board = new Board(0, 0, 100, 100, { x: 2, y: 2 });
    const move = new Move(["f"], 0, 0, EnumeratedDirection.south);
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 1 });
  });

  test("Robot moves forward two steps from south starting direction", () => {
    const board = new Board(0, 0, 100, 100, { x: 2, y: 2 });
    const move = new Move(["f", "f"], 0, 0, EnumeratedDirection.south);
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 2 });
  });

  test("Robot moves forward from east direction, then turn right", () => {
    const board = new Board(0, 0, 100, 100, { x: 2, y: 2 });
    const move = new Move(["f", "r", "f"], 0, 0, EnumeratedDirection.east);
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 1, y: 1 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.south);
  });

  test("Robot takes in multiple commands", () => {
    const board = new Board(0, 0, 100, 100, { x: 2, y: 2 });
    const move = new Move(
      ["f", "f", "l", "f", "f"],
      0,
      0,
      EnumeratedDirection.south
    );
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 2, y: 2 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.east);
  });

  test("Robot is limited to the grid", () => {
    const board = new Board(0, 0, 100, 100, { x: 2, y: 2 });
    const move = new Move(
      ["f", "f", "b", "b", "b"],
      0,
      0,
      EnumeratedDirection.south
    );
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.south);
  });
});
