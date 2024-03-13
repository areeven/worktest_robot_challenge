import { Position } from "./Position";
import { EnumeratedDirection } from "./Direction";

export interface RobotState {
  position: Position;
  direction: EnumeratedDirection;
}
