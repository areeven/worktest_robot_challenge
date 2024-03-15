import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";
import { Move } from "../classes/Move";
import { Board } from "../classes/Board";

afterEach(() => {
  console.log("Test Done");
});

const board = new Board(100, 100, { x: 40, y: 40 });

describe("Test robot positioning", () => {
  test("Robot start position is 0, 0", () => {
    const commands: string[] = [];
    const move = new Move(commands, 0, 0, EnumeratedDirection.north, board);
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("Robot start position is 4, 4", () => {
    const commands: string[] = [];
    const move = new Move(commands, 4, 4, EnumeratedDirection.north, board);
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 4, y: 4 });
  });

  test("Robot turns to the left", () => {
    const commands: string[] = ["l"];
    const move = new Move(commands, 0, 0, EnumeratedDirection.north, board);
    expect(move.getDirection()).toEqual(EnumeratedDirection.west);
  });

  test("Robot moves to the right", () => {
    const commands = ["r"];
    const move = new Move(commands, 0, 0, EnumeratedDirection.north, board);
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("Robot moves direction up", () => {
    const commands = ["f"];
    const move = new Move(commands, 0, 0, EnumeratedDirection.north, board);
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("Robot moves direction down", () => {
    const commands = ["f"];
    const move = new Move(commands, 0, 0, EnumeratedDirection.south, board);
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 0, y: 1 });
  });

  test("Robot starting position is 2,2", () => {
    const commands: string[] = [];
    const move = new Move(commands, 2, 2, EnumeratedDirection.south, board);
    expect(move.getRobot().getCurrentPosition()).toEqual({ x: 2, y: 2 });
  });
});
