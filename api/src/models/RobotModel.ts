import { Position } from "../utils/interfaces/Position";
import { EnumeratedDirection } from "../utils/interfaces/Direction";
import { Robot } from "../classes/Robot";

export class RobotModel extends Robot {
  constructor(position: Position, direction: EnumeratedDirection) {
    const { x, y } = position;
    super(x, y, direction);
  }
}
