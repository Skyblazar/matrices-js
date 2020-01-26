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
   * multiply all entries of this matrix with a number
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
   * Checks if this is a square matrix
   */
  isSquare() {
    return this.rows === this.cols;
  }

  /**
   * Checks if this matrix has the same size as another matrix
   * @param {Matrix} matrix 
   */
  isSameSizeAs(matrix) {
    return this.rows === matrix.rows && this.cols === matrix.cols;
  }

  /**
   * Checks if this matrix is an identity matrix
   */
  isEye() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (i === j && this.entries[i][j] !== 1)
          return false;

        if (i !== j && this.entries[i][j] !== 0)
          return false;
      }
    }

    return true;
  }

  /**
   * Gets the first minimum value of this matrix
   */
  min() {
    let min = this.entries[0][0];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.entries[i][j] < min)
          min = this.entries[i][j];
      }
    }

    return min;
  }

  /**
   * Create Identity matrix
   * @param {number} size 
   */
  static eye(size) {
    const identityMatrix = new Matrix(size, size).fill(0);

    for (let i = 0; i < size; i++) {
      identityMatrix.entries[i][i] = 1;
    }

    return identityMatrix;
  }

  /**
   * Creates a matrix with random entries between min and max
   * @param {number} rows 
   * @param {number} cols 
   * @param {number} min 
   * @param {number} max 
   */
  static random(rows, cols, min, max) {
    const randomMatrix = new Matrix(rows, cols);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        randomMatrix.entries[i][j] = Math.floor(min + Math.random() * max);
      }
    }

    return randomMatrix;
  }

  /**
   * Returns a string representation of this matrix
   */
  toString() {
    return `Matrix(rows: ${this.rows}, cols: ${this.cols}, entries: ${this.entries})`;
  }
}

module.exports = Matrix;
