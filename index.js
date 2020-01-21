class Matrix {

  constructor(rows = 0, cols = 0) {
    this.rows = rows;
    this.cols = cols;
  }

  toString() {
    return `Matrix(rows: ${this.rows}, cols: ${this.cols})`;
  }
}
