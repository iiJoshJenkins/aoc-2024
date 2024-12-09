const Direction = {
  FORWARD: [0, 1],
  BACKWARD: [0, -1],
  DOWN: [1, 0],
  UP: [-1, 0],
  DIAGONAL_DOWN_RIGHT: [1, 1],
  DIAGONAL_DOWN_LEFT: [1, -1],
  DIAGONAL_UP_RIGHT: [-1, 1],
  DIAGONAL_UP_LEFT: [-1, -1],
} as const;

export class Grid {
  private grid: string[][];

  constructor(input: string) {
    this.grid = input.split('\n').map((row) => row.split(''));
  }

  getGrid() {
    return this.grid;
  }

  getGridValue(x: number, y: number) {
    return this.grid[y][x];
  }

  private findLine(
    row: number,
    col: number,
    direction: (typeof Direction)[keyof typeof Direction],
    lookupStr: string
  ): boolean {
    const rowShift = direction[0];
    const colShift = direction[1];

    const diagonal: string[] = [];
    for (let i = 0; i < lookupStr.length; i++) {
      if (
        !this.grid[row + rowShift * i] ||
        !this.grid[row + rowShift * i][col + colShift * i]
      )
        return false;
      diagonal.push(this.grid[row + rowShift * i][col + colShift * i]);
    }
    return diagonal.join('') === lookupStr;
  }

  public findForwards(row: number, col: number, lookupStr: string) {
    return this.findLine(row, col, Direction.FORWARD, lookupStr);
  }

  public findBackwards(row: number, col: number, lookupStr: string) {
    return this.findLine(row, col, Direction.BACKWARD, lookupStr);
  }

  public findDownwards(row: number, col: number, lookupStr: string) {
    return this.findLine(row, col, Direction.DOWN, lookupStr);
  }

  public findUpwards(row: number, col: number, lookupStr: string) {
    return this.findLine(row, col, Direction.UP, lookupStr);
  }

  public findDownwardsDiagonalRight(
    row: number,
    col: number,
    lookupStr: string
  ) {
    return this.findLine(row, col, Direction.DIAGONAL_DOWN_RIGHT, lookupStr);
  }

  public findDownwardsDiagonalLeft(
    row: number,
    col: number,
    lookupStr: string
  ) {
    return this.findLine(row, col, Direction.DIAGONAL_DOWN_LEFT, lookupStr);
  }

  public findUpwardsDiagonalRight(row: number, col: number, lookupStr: string) {
    return this.findLine(row, col, Direction.DIAGONAL_UP_RIGHT, lookupStr);
  }

  public findUpwardsDiagonalLeft(row: number, col: number, lookupStr: string) {
    return this.findLine(row, col, Direction.DIAGONAL_UP_LEFT, lookupStr);
  }

  public findAll(lookupStr: string) {
    let count = 0;

    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[row].length; col++) {
        if (this.findForwards(row, col, lookupStr)) count++;
        if (this.findBackwards(row, col, lookupStr)) count++;
        if (this.findDownwards(row, col, lookupStr)) count++;
        if (this.findUpwards(row, col, lookupStr)) count++;
        if (this.findDownwardsDiagonalRight(row, col, lookupStr)) count++;
        if (this.findDownwardsDiagonalLeft(row, col, lookupStr)) count++;
        if (this.findUpwardsDiagonalRight(row, col, lookupStr)) count++;
        if (this.findUpwardsDiagonalLeft(row, col, lookupStr)) count++;
      }
    }

    return count;
  }
}
