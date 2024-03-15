import { Board } from "../classes/Board";

afterEach(() => {
  console.log("Test Done");
});

describe("Test grid pattern and positioning", () => {
  test("Grid pattern is 100x100", () => {
    const board = new Board(100, 100, { x: 2, y: 2 });
    expect(board.getWidth()).toEqual(100);
    expect(board.getHeight()).toEqual(100);
  });

  test("Top left corner is 0,0", () => {
    const board = new Board(100, 100, { x: 2, y: 2 });
  });

  test("Grid pattern is 45x45", () => {
    const board = new Board(45, 45, { x: 2, y: 2 });
    expect(board.getWidth()).toEqual(45);
    expect(board.getHeight()).toEqual(45);
    expect(board.getObstacle()).toEqual({ x: 2, y: 2 });
  });
});
