import { Robot } from "../classes/Robot";

describe("Test robot positioning", () => {
  test("robot start position is 0,0", () => {
    const robot = new Robot(0, 0);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("robot start position is 4,5", () => {
    const robot = new Robot(4, 5);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("robot moves to the left", () => {
    const robot = new Robot(0, 0);
    robot.moveLeft(5);
    expect(robot.getCurrentPosition()).toEqual({ x: -5, y: 0 });
  });

  test("robot moves to the right", () => {
    const robot = new Robot(0, 0);
    robot.moveRight(5);
    expect(robot.getCurrentPosition()).toEqual({ x: 5, y: 0 });
  });

  test("robot moves direction up", () => {
    const robot = new Robot(0, 0);
    robot.moveUp(5);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 5 });
  });

  test("robot moves direction down", () => {
    const robot = new Robot(0, 0);
    robot.moveDown(5);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: -5 });
  });

  /* test("robot should not move further than 0", () => {
    const robot = new Robot(0, 0);
    robot.moveDown(5);
    robot.moveUp(7);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
  }); */
});
