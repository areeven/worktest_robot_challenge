import { Board } from "../classes/Board";

describe("Test grid pattern and positioning", () => {
  test("Grid pattern is 100x100", () => {
    const board = new Board(0, 0, 100, 100);
    expect(board.getWidth()).toEqual(100);
    expect(board.getHeight()).toEqual(100);
  });
});
