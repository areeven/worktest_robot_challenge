export class Board {
  private xTopLeft: number;
  private yTopLeft: number;
  private width: number;
  private height: number;

  constructor(
    xTopLeft: number,
    yTopLeft: number,
    width: number,
    height: number
  ) {
    this.xTopLeft = xTopLeft;
    this.yTopLeft = yTopLeft;
    this.width = width;
    this.height = height;
  }

  getTopLeftCorner(): { x: number; y: number } {
    return { x: this.xTopLeft, y: this.yTopLeft };
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}
