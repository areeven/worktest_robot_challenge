import { Direction } from "../classes/Direction";
import { EnumeratedDirection } from "../interfaces/Direction";

describe("Test robot directions N, W, E, S", () => {
  test("Robot direction is North", () => {
    const direction = new Direction(0, 0, EnumeratedDirection.north);
    const currentDirection = direction.getCurrentPosition();
    expect(currentDirection).toEqual(EnumeratedDirection.north);
  });

  test("Robot direction is West", () => {
    const direction = new Direction(0, 0, EnumeratedDirection.west);
    const currentDirection = direction.getCurrentPosition();
    expect(currentDirection).toEqual(EnumeratedDirection.west);
  });

  test("Robot direction is East", () => {
    const direction = new Direction(0, 0, EnumeratedDirection.east);
    const currentDirection = direction.getCurrentPosition();
    expect(currentDirection).toEqual(EnumeratedDirection.east);
  });

  test("Robot direction is South", () => {
    const direction = new Direction(0, 0, EnumeratedDirection.south);
    const currentDirection = direction.getCurrentPosition();
    expect(currentDirection).toEqual(EnumeratedDirection.south);
  });
});
