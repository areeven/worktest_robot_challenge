import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";
import { Move } from "../classes/Move";
import { Obstacle } from "../classes/Obstacle";
import { Robot } from "../classes/Robot";

describe("Test robot colliding with obstacle", () => {
  test("Robot moves to the right, then collides with an obstacle", () => {
    const move = new Move(
      ["f", "f", "r", "f", "f"],
      0,
      0,
      EnumeratedDirection.east,
      { width: 5, height: 5 }
    );
    const robot = move.getRobot();
    const obstacle = new Obstacle(2, 2);

    expect(robot.getCurrentPosition()).toEqual(obstacle.getCurrentPosition());
  });
});
