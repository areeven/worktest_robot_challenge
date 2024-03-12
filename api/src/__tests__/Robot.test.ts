import { Robot } from "../classes/Robot";

describe("Test robot positioning", () => {
  test("robot start position is 0,0", () => {
    const robot = new Robot(0, 0);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });
});
