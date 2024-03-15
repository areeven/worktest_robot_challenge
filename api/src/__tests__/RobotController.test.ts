import { Request, Response } from "express";
import { RobotController } from "../controllers/RobotController";
import { EnumeratedDirection } from "../utils/interfaces/EnumeratedDirection";

jest.mock("../classes/Move", () => {
  return {
    Move: jest
      .fn()
      .mockImplementation(
        (
          commands: string[] = [],
          x_pos: number,
          y_pos: number,
          initDirection: EnumeratedDirection,
          board: any
        ) => ({
          executeCommands: jest.fn().mockReturnValue(commands),
          getRobot: jest.fn().mockReturnValue({
            getCurrentPosition: jest
              .fn()
              .mockReturnValue({ x: x_pos, y: y_pos }),
          }),
          getDirection: jest.fn().mockReturnValue(initDirection),
          getBoard: jest.fn().mockReturnValue(board),
        })
      ),
  };
});

jest.mock("../classes/Board", () => {
  const Obstacle = require("../classes/Obstacle").Obstacle;

  return {
    Board: jest.fn().mockImplementation((width, height, obstaclePosition) => {
      const obstacle = new Obstacle(obstaclePosition.x, obstaclePosition.y);
      return {
        getWidth: jest.fn().mockReturnValue(width),
        getHeight: jest.fn().mockReturnValue(height),
        getObstacle: jest.fn().mockReturnValue(obstacle),
      };
    }),
  };
});

describe("RobotController", () => {
  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response;

  test("should execute commands and return robot position and direction", () => {
    const mockRequest = {
      body: {
        commands: ["f", "r", "f"],
        x_pos: 1,
        y_pos: 1,
        initDirection: EnumeratedDirection.north,
        width: 5,
        height: 5,
        obstacle: {
          x: 2,
          y: 2,
        },
      },
    } as Request;

    RobotController.moveRobot(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({
        board: expect.any(Object),
        direction: "NORTH",
        position: { x: 1, y: 1 },
      })
    );
  });

  test("should handle missing request parameters", () => {
    const invalidRequest = { body: {} } as Request;

    RobotController.moveRobot(invalidRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "Invalid request parameters",
    });
  });
});
