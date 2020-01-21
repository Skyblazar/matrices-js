class Matrix {

  constructor(rows = 0, cols = 0) {
    this.rows = rows;
    this.cols = cols;

    /** 
     * @type {number[][]} entries 
     */
    this.entries = new Array(rows).fill(0).map(() => new Array(cols).fill(0))
  }

  /**
   * Fill matrix with a particular number
   * @param {number} num
   */
  fill(num) {
    this.entries.forEach((col) => col = col.fill(num));

    return this;
  }

  /**
   * Set the value at a particular index, row, column or entire matrix
   * @param {number[]} index 
   * @param {number} num 
   */
  set(index, num) {
    const [i, j] = index;

    if (i === undefined && j !== undefined)
      this.entries.forEach((row) => row[j] = num);
    else if (i !== undefined && j === undefined)
      this.entries[i].fill(num);
    else if (i === undefined && j === undefined)
      this.fill(num);
    else
      this.entries[i][j] = num;

    return this;
  }

  /**
   * Transposes this matrix
   */
  transpose() {
    const newEntries = [];

    for (let i = 0; i < this.cols; i++) {
      newEntries[i] = [];
      for (let j = 0; j < this.rows; j++) {
        newEntries[i][j] = this.entries[j][i];
      }
    }

    this.entries = newEntries;
    [this.rows, this.cols] = [this.cols, this.rows];

    return this;
  }

  /**
   * Creates a new transpose matrix
   */
  transposeClone() {
    const newMatrix = new Matrix(this.cols, this.rows);

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        newMatrix.entries[i][j] = this.entries[j][i];
      }
    }

    return newMatrix;
  }

  toString() {
    return `Matrix(rows: ${this.rows}, cols: ${this.cols}, entries: ${this.entries})`;
  }
}

const m = new Matrix(3, 2).fill(3).set([, 0], 1);
console.log(m, m.transposeClone());

module.exports = Matrix;
