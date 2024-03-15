import { Board } from "../classes/Board";

describe("Test grid pattern and positioning", () => {
  test("Grid pattern is 100x100", () => {
    const board = new Board(0, 0, 100, 100, { x: 2, y: 2 });
    expect(board.getWidth()).toEqual(100);
    expect(board.getHeight()).toEqual(100);
  });

  test("Top left corner is 0,0", () => {
    const board = new Board(0, 0, 100, 100, { x: 2, y: 2 });
    expect(board.getTopLeftCorner()).toEqual({ x: 0, y: 0 });
  });

  test("Grid pattern is 45x45", () => {
    const board = new Board(0, 0, 45, 45, { x: 2, y: 2 });
    expect(board.getWidth()).toEqual(45);
    expect(board.getHeight()).toEqual(45);
    expect(board.getObstacle()).toEqual({ x: 2, y: 2 });
  });
});
