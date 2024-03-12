import { Direction, EnumeratedDirection } from "../classes/Direction";

describe("Test robot directions N, W, E, S", () => {
  test("Robot direction is North", () => {
    const direction = new Direction(0, 0, EnumeratedDirection.north);
    const currentDirection = direction.getCurrentPosition();
    expect(currentDirection).toEqual(EnumeratedDirection.north);
  });
});
