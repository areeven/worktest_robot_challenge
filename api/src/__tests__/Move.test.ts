import { EnumeratedDirection } from "../interfaces/EnumeratedDirection";
import { Move } from "../classes/Move";

describe("Test movements across the board and limitations", () => {
  test("Robot moves forward, to the south", () => {
    const move = new Move(["f"], 0, 0, EnumeratedDirection.south, {
      width: 100,
      height: 100,
    });
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 1 });
  });

  test("Robot moves forward two steps from south starting direction", () => {
    const move = new Move(["f", "f"], 0, 0, EnumeratedDirection.south, {
      width: 100,
      height: 100,
    });
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 2 });
  });

  test("Robot moves forward from east direction, then turn right", () => {
    const move = new Move(["f", "r"], 0, 0, EnumeratedDirection.east, {
      width: 100,
      height: 100,
    });
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 1, y: 0 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.south);
  });

  test("Robot takes in multiple commands", () => {
    const move = new Move(
      ["f", "f", "l", "f", "f"],
      0,
      0,
      EnumeratedDirection.south,
      { width: 100, height: 100 }
    );
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 2, y: 2 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.east);
  });

  test("Robot is limited to the grid", () => {
    const move = new Move(
      ["f", "f", "b", "b", "b"],
      0,
      0,
      EnumeratedDirection.south,
      { width: 100, height: 100 }
    );
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.south);
  });

  test("Robot is limited to the grid, turn around", () => {
    const move = new Move(
      ["f", "f", "f", "f", "f", "l", "l", "f", "f", "f", "f", "f", "f"],
      0,
      0,
      EnumeratedDirection.south,
      { width: 4, height: 4 }
    );
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.north);
  })
});
