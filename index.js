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
   * Sums a particular row, column or entire matrix
   * @param {number[]} index
   */
  sum(index) {
    const [i, j] = index;

    if (i >= this.rows || i < 0)
      throw Error(`row index: ${i} is out of range for this matrix. select a row index between 0 and ${this.rows - 1}`);

    if (j >= this.cols || j < 0)
      throw Error(`column index: ${j} is out of range for this matrix. select a column index between 0 and ${this.cols - 1}`);

    if (i === undefined && j !== undefined)
      return this.entries.reduce((total, row) => total + row[j], 0);
    else if (i !== undefined && j === undefined)
      return this.entries[i].reduce((total, val) => total + val, 0);
    else if (i === undefined && j === undefined)
      return this.entries.reduce((total, row) =>
        total + row.reduce((rowTotal, val) => rowTotal + val, 0), 0);

    return this.entries[i][j];
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
   * Calculates the square of all entries in this matrix
   */
  scalarSquare() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] *= this.entries[i][j];
      }
    }

    return this;
  }

  /**
   * Creates a new matrix with the square of all entries in this matrix
   */
  scalarSquareClone() {
    const newMatrix = new Matrix(this.cols, this.rows);

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        newMatrix.entries[i][j] = this.entries[i][j] * this.entries[i][j];
      }
    }

    return newMatrix;
  }

  /**
   * Calculates the nth power of all entries in this matrix
   * @param {number} n 
   */
  scalarNthPower(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] = Math.pow(this.entries[i][j], n);
      }
    }

    return this;
  }

  /**
   * Creates a new matrix with the nth power of all entries in this matrix
   * @param {number} n 
   */
  scalarNthPowerClone(n) {
    const newMatrix = new Matrix(this.cols, this.rows);

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        newMatrix.entries[i][j] = Math.pow(this.entries[i][j], n);
      }
    }

    return newMatrix;
  }

  /**
   * Calculates the square-root of all entries in this matrix
   */
  scalarSqrt() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] = Math.sqrt(this.entries[i][j]);
      }
    }

    return this;
  }

  /**
   * Creates a new matrix with the square-root of all entries in this matrix
   */
  scalarSqrtClone() {
    const newMatrix = new Matrix(this.cols, this.rows);

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        newMatrix.entries[i][j] = Math.sqrt(this.entries[i][j]);
      }
    }

    return newMatrix;
  }

  /**
   * Calculates the nth root of all entries in this matrix
   * @param {number} n 
   */
  scalarNthRoot(n) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.entries[i][j] = Math.pow(this.entries[i][j], 1 / n);
      }
    }

    return this;
  }

  /**
   * Creates a new matrix with the nth root of all entries in this matrix
   * @param {number} n 
   */
  scalarNthRootClone(n) {
    const newMatrix = new Matrix(this.cols, this.rows);

    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        newMatrix.entries[i][j] = Math.pow(this.entries[i][j], 1 / n);
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
   * Multiplies this matrix with another matrix (this x matrix)
   * @param {Matrix} matrix 
   */
  multiply(matrix) {
    if (this.cols !== matrix.rows)
      throw Error(`Dimensions mismatch`);

    const product = new Matrix(this.rows, matrix.cols);

    for (let i = 0; i < product.rows; i++) {
      for (let j = 0; j < product.cols; j++) {
        product.entries[i][j] = this.entries[i].reduce((total, x, k) => total + (x * matrix.entries[k][j]), 0);
      }
    }

    // this.rows = product.rows;
    // this.cols = product.cols;

    return product;
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
   * Gets the first minimum value and index in this matrix
   */
  min() {
    let min = this.entries[0][0];
    let index = [0, 0];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.entries[i][j] < min) {
          min = this.entries[i][j];
          index = [i, j];
        }
      }
    }

    return {
      value: min,
      index
    };
  }

  /**
   * Gets the first maximum value of this matrix
   */
  max() {
    let max = this.entries[0][0];
    let index = [0, 0];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (this.entries[i][j] > max) {
          max = this.entries[i][j];
          index = [i, j];
        }
      }
    }

    return {
      value: max,
      index
    };
  }

  /**
   * Creates a new transpose matrix
   * @param {Matrix} matrix
   */
  static transpose(matrix) {
    const newMatrix = new Matrix(matrix.cols, matrix.rows);

    for (let i = 0; i < matrix.cols; i++) {
      for (let j = 0; j < matrix.rows; j++) {
        newMatrix.entries[i][j] = matrix.entries[j][i];
      }
    }

    return newMatrix;
  }

  /**
   * Creates a new matrix with the square of all entries in another matrix
   * @param {Matrix} matrix
   */
  static scalarSquare(matrix) {
    const newMatrix = new Matrix(matrix.cols, matrix.rows);

    for (let i = 0; i < matrix.cols; i++) {
      for (let j = 0; j < matrix.rows; j++) {
        newMatrix.entries[i][j] = matrix.entries[i][j] * matrix.entries[i][j];
      }
    }

    return newMatrix;
  }

  /**
   * Creates a new matrix with the nth power of all entries in another matrix
   * @param {Matrix} matrix
   * @param {number} n 
   */
  static scalarNthPower(matrix, n) {
    const newMatrix = new Matrix(matrix.cols, matrix.rows);

    for (let i = 0; i < matrix.cols; i++) {
      for (let j = 0; j < matrix.rows; j++) {
        newMatrix.entries[i][j] = Math.pow(matrix.entries[i][j], n);
      }
    }

    return newMatrix;
  }

  /**
   * Creates a new matrix with the square-root of all entries in another matrix
   * @param {Matrix} matrix
   */
  static scalarSqrt(matrix) {
    const newMatrix = new Matrix(matrix.cols, matrix.rows);

    for (let i = 0; i < matrix.cols; i++) {
      for (let j = 0; j < matrix.rows; j++) {
        newMatrix.entries[i][j] = Math.sqrt(matrix.entries[i][j]);
      }
    }

    return newMatrix;
  }

  /**
   * Creates a new matrix with the nth root of all entries in another matrix
   * @param {Matrix} matrix
   * @param {number} n 
   */
  static scalarNthRoot(matrix, n) {
    const newMatrix = new Matrix(matrix.cols, matrix.rows);

    for (let i = 0; i < matrix.cols; i++) {
      for (let j = 0; j < matrix.rows; j++) {
        newMatrix.entries[i][j] = Math.pow(matrix.entries[i][j], 1 / n);
      }
    }

    return newMatrix;
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
