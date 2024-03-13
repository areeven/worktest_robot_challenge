import { EnumeratedDirection } from "../utils/interfaces/Direction";
import { Robot } from "../classes/Robot";
import express, { Application } from "express";
import robotRouter from "../routes/RobotRoutes";
import request from "supertest";

let app: Application;

beforeAll(() => {
  app = express();
  app.use("/api/robot", robotRouter);
});

describe("Test robot positioning", () => {
  test("Robot start position is 0, 0", () => {
    const robot = new Robot(0, 0, EnumeratedDirection.north);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("Robot start position is 4, 5", () => {
    const robot = new Robot(4, 5, EnumeratedDirection.north);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 0 });
  });

  test("Robot moves to the left", () => {
    const robot = new Robot(0, 0, EnumeratedDirection.north);
    robot.moveLeft(5);
    expect(robot.getCurrentPosition()).toEqual({ x: -5, y: 0 });
  });

  test("Robot moves to the right", () => {
    const robot = new Robot(0, 0, EnumeratedDirection.north);
    robot.moveRight(5);
    expect(robot.getCurrentPosition()).toEqual({ x: 5, y: 0 });
  });

  test("Robot moves direction up", () => {
    const robot = new Robot(0, 0, EnumeratedDirection.north);
    robot.moveUp(5);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: -5 });
  });

  test("Robot moves direction down", () => {
    const robot = new Robot(0, 0, EnumeratedDirection.north);
    robot.moveDown(5);
    expect(robot.getCurrentPosition()).toEqual({ x: 0, y: 5 });
  });
});

describe("Test robot controller", () => {
  it("should respond with 400 if required parameters are missing", async () => {
    const response = await request(app)
      .post("/api/robot/move")
      .send({
        commands: [],
        initDirection: EnumeratedDirection.north,
        boardSize: { width: 5, height: 5 },
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error");
    expect(response.body.error).toBe("Missing required parameters");
  });
});

describe("Test robot controller", () => {
  it("should respond with 200 and robot position and direction if parameters are valid", async () => {
    const response = await request(app)
      .post("/api/robot/move")
      .send({
        commands: ["f", "r", "f"],
        x_pos: 0,
        y_pos: 0,
        initDirection: EnumeratedDirection.north,
        boardSize: { width: 5, height: 5 },
      });
    console.log("Response Body:", response.body);
    expect(response.body).toBe("object");
    expect(response.status).toBe(200);
  });

  test("Property robot", async () => {
    const response = await request(app)
      .post("/api/robot/move")
      .send({
        commands: ["f", "r", "f"],
        x_pos: 0,
        y_pos: 0,
        initDirection: EnumeratedDirection.north,
        boardSize: { width: 5, height: 5 },
      });
    expect(response.body).toHaveProperty("robot");
  });

  test("Property direction", async () => {
    const response = await request(app)
      .post("/api/robot/move")
      .send({
        commands: ["f", "r", "f"],
        x_pos: 0,
        y_pos: 0,
        initDirection: EnumeratedDirection.north,
        boardSize: { width: 5, height: 5 },
      });
    expect(response.body).toHaveProperty("direction");
  });

  test("Width and height", async () => {
    const response = await request(app)
      .post("/api/robot/move")
      .send({
        commands: ["f", "r", "f"],
        x_pos: 0,
        y_pos: 0,
        initDirection: EnumeratedDirection.north,
        boardSize: { width: 5, height: 5 },
      });
    expect(response.body.robot).toEqual({ x: 1, y: 1 });
  });

  test("Robot direction", async () => {
    const response = await request(app)
      .post("/api/robot/move")
      .send({
        commands: ["f", "r", "f"],
        x_pos: 0,
        y_pos: 0,
        initDirection: EnumeratedDirection.north,
        boardSize: { width: 5, height: 5 },
      });
    expect(response.body.direction).toBe(EnumeratedDirection.east);
  });
});
