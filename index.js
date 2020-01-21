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
   * Fills this matrix with a particular number
   * @param {number} num
   */
  fill(num) {
    this.entries.forEach((col) => col = col.fill(num));

    return this;
  }

  /**
   * Sets the value at a particular index, row, column or entire matrix
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
  * Sets the entries of this matrix
  * @param {number[][]} entries 
  */
  setMatrix(entries) {
    if (entries.length !== this.rows)
      throw Error(`The number of rows for entries should be: ${this.rows}`);
    if (entries[0] && entries[0].length !== this.cols)
      throw Error(`The number of columns for entries should be: ${this.cols}`);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] = entries[i][j];
      }
    }

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

  /**
   * Adds another matrix to this matrix
   * @param {Matrix} matrix 
   */
  add(matrix) {
    if (matrix.rows !== this.rows || matrix.cols !== this.cols)
      throw Error(`The argument matrix must have rows: ${this.rows} and columns: ${this.cols}`);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] += matrix.entries[i][j];
      }
    }

    return this;
  }

  /**
   * Subtracts another matrix from this matrix
   * @param {Matrix} matrix 
   */
  subtract(matrix) {
    if (matrix.rows !== this.rows || matrix.cols !== this.cols)
      throw Error(`The argument matrix must have rows: ${this.rows} and columns: ${this.cols}`);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] -= matrix.entries[i][j];
      }
    }

    return this;
  }

  /**
   * Adds a number to all entries of this matrix
   * @param {number} num 
   */
  scalarAdd(num) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] += num;
      }
    }

    return this;
  }

  /**
   * Subtracts a number from all entries of this matrix
   * @param {number} num 
   */
  scalarSubtract(num) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] -= num;
      }
    }

    return this;
  }

  /**
   * multiply a number from all entries of this matrix
   * @param {number} num 
   */  
  scalarMult(num) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] *= num;
      }
    }

    return this;
  }
  /**
   * Returns a string representation of this matrix
   */
  toString() {
    return `Matrix(rows: ${this.rows}, cols: ${this.cols}, entries: ${this.entries})`;
  }
}

const m = new Matrix(2, 2).fill(3);
console.log(m.scalarSubtract(2));

module.exports = Matrix;
