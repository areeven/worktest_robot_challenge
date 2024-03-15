import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";
import { Move } from "../classes/Move";
import { Board } from "../classes/Board";

afterEach(() => {
  console.log("Test Done");
});

describe("Test movements across the board and limitations", () => {
  const board = new Board(100, 100, { x: 40, y: 40 });
  test("Robot moves forward, to the south", () => {
    const move = new Move(["f"], 0, 0, EnumeratedDirection.south, board);
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 1 });
  });

  test("Robot moves forward two steps from south starting direction", () => {
    const board = new Board(100, 100, { x: 40, y: 40 });
    const move = new Move(["f", "f"], 0, 0, EnumeratedDirection.south, board);
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 2 });
  });

  test("Robot moves forward from east direction, then turn right", () => {
    const move = new Move(
      ["f", "r", "f"],
      0,
      0,
      EnumeratedDirection.east,
      board
    );
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 1, y: 1 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.south);
  });

  test("Robot takes in multiple commands", () => {
    const board = new Board(100, 100, { x: 40, y: 40 });
    const move = new Move(
      ["f", "f", "l", "f"],
      0,
      0,
      EnumeratedDirection.south,
      board
    );
    const robot = move.getRobot().getCurrentPosition();
    expect(robot.x).toEqual(1);
    expect(robot.y).toEqual(2);
    expect(move.getDirection()).toEqual(EnumeratedDirection.east);
  });

  test("Robot is limited to the grid", () => {
    const board = new Board(100, 100, { x: 40, y: 40 });
    const move = new Move(
      ["f", "f", "b", "b", "b"],
      0,
      0,
      EnumeratedDirection.south,
      board
    );
    const robot = move.getRobot();
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
    expect(move.getDirection()).toEqual(EnumeratedDirection.south);
  });
});

describe("Test required movements", () => {
  test("100x100 grid, face south, fflff and end up at 2,2", () => {
    const board = new Board(100, 100, { x: 40, y: 40 });
    const move = new Move(
      ["f", "f", "r", "f", "f"],
      0,
      0,
      EnumeratedDirection.east,
      board
    );

    const boardHeight = board.getHeight();
    const boardWidth = board.getWidth();

    expect(boardHeight).toBe(100);
    expect(boardWidth).toBe(100);
    expect(board.getObstacle()).toEqual({ x: 40, y: 40 });
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 2, y: 2 });
  });

  test("50x50 grid, location 1,1 face north, fflff, end up 0,0", () => {
    const board = new Board(50, 50, { x: 40, y: 40 });
    const move = new Move(
      ["f", "f", "l", "f", "f"],
      1,
      1,
      EnumeratedDirection.north,
      board
    );
    console.log(move.getRobot().getCurrentPosition());
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("100x100 grid, location 50,50, face north, obstacle 48,50 should land on 48,49", () => {
    const board = new Board(100, 100, { x: 48, y: 50 });
    const move = new Move(
      ["f", "f", "l", "f", "f", "r", "b", "b"],
      50,
      50,
      EnumeratedDirection.north,
      board
    );
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 48, y: 49 });
  });
});
