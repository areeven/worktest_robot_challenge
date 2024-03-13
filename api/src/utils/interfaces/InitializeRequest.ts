import { EnumeratedDirection } from "./Direction";

export interface InitializeRequest {
  x: number;
  y: number;
  direction: EnumeratedDirection;
}
