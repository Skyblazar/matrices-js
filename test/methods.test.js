const Matrix = require('../index');

describe('Matrix Create Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('fill() - should fill matrix with a number', () => {
    expect(matrix.fill(3).entries).toEqual([[3, 3], [3, 3]]);
  });

  it('set() - should set the value at a particular index to a number', () => {
    expect(matrix.fill(0).set([0, 0], 100).entries).toEqual([[100, 0], [0, 0]]);
  });

  it('set() - should set the values at a particular row to a number', () => {
    expect(matrix.fill(0).set([1,], 100).entries).toEqual([[0, 0], [100, 100]]);
  });

  it('set() - should set the values at a particular column to a number', () => {
    expect(matrix.fill(0).set([, 0], 100).entries).toEqual([[100, 0], [100, 0]]);
  });

  it('set() - should set all the values in the matrix to a number', () => {
    expect(matrix.fill(0).set([], 100).entries).toEqual([[100, 100], [100, 100]]);
  });

  it('setMatrix() - should set all the values in the matrix to an array of entries', () => {
    expect(matrix.fill(0).setMatrix([[1, 2], [3, 4]]).entries).toEqual([[1, 2], [3, 4]]);
  });
});

describe('Matrix - Vector Operation Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('add() - should add another matrix to this matrix', () => {
    expect(matrix.fill(0).set([], 100).add(new Matrix(2, 2).fill(100)).entries)
      .toEqual([[200, 200], [200, 200]]);
  });

  it('addClone() - should create a new matrix with entries equal to the addition of this matrix and another matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(2);
    const squareMatrix = newMatrix.addClone(new Matrix(2, 2).fill(2));

    expect(newMatrix.entries).toEqual([[2, 2], [2, 2]]);
    expect(squareMatrix.entries).toEqual([[4, 4], [4, 4]]);
  });

  it('subtract() - should subtract another matrix from this matrix', () => {
    expect(matrix.fill(0).set([], 100).subtract(new Matrix(2, 2).fill(100)).entries)
      .toEqual([[0, 0], [0, 0]]);
  });

  it('multiply() - should multiply this matrix with another matrix (this * matrix)', () => {
    expect(matrix.fill(0).set([], 10).multiply(new Matrix(2, 1).fill(10)).entries)
      .toEqual([[200], [200]]);
  });
});

describe('Matrix - Scalar Operation Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('scalarAdd() - should add a number to all entries of this matrix', () => {
    expect(matrix.fill(0).set([], 100).scalarAdd(200).entries)
      .toEqual([[300, 300], [300, 300]]);
  });

  it('scalarSubtract() - should subtract a number from all entries of this matrix', () => {
    expect(matrix.fill(0).set([], 100).scalarSubtract(200).entries)
      .toEqual([[-100, -100], [-100, -100]]);
  });

  it('scalarMult() - should multiply all entries of this matrix with a number', () => {
    expect(matrix.fill(1).scalarMult(2).entries)
      .toEqual([[2, 2], [2, 2]]);
  });
});

describe('Matrix - Scalar Function Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('scalarSquare() - should calculate the square of all entries in this matrix', () => {
    const squareMatrix = new Matrix(2, 2).fill(2).scalarSquare();

    expect(squareMatrix.entries).toEqual([[4, 4], [4, 4]]);
  });

  it('scalarSquareClone() - should create a new matrix with the square of all entries in this matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(2);
    const squareMatrix = newMatrix.scalarSquareClone();

    expect(newMatrix.entries).toEqual([[2, 2], [2, 2]]);
    expect(squareMatrix.entries).toEqual([[4, 4], [4, 4]]);
  });

  it('scalarNthPower() - should calculate the nth power of all entries in this matrix', () => {
    const nthPowerMatrix = new Matrix(2, 2).fill(2).scalarNthPower(3);

    expect(nthPowerMatrix.entries).toEqual([[8, 8], [8, 8]]);
  });

  it('scalarNthPowerClone() - should create a new matrix with the nth power of all entries in this matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(2);
    const nthPowerMatrix = newMatrix.scalarNthPowerClone(3);

    expect(newMatrix.entries).toEqual([[2, 2], [2, 2]]);
    expect(nthPowerMatrix.entries).toEqual([[8, 8], [8, 8]]);
  });

  it('scalarSqrt() - should calculate the square-root of all entries in this matrix', () => {
    const sqrtMatrix = new Matrix(2, 2).fill(4).scalarSqrt();

    expect(sqrtMatrix.entries).toEqual([[2, 2], [2, 2]]);
  });

  it('scalarSqrtClone() - should create a new matrix with the square-root of all entries in this matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(4);
    const sqrtMatrix = newMatrix.scalarSqrtClone();

    expect(newMatrix.entries).toEqual([[4, 4], [4, 4]]);
    expect(sqrtMatrix.entries).toEqual([[2, 2], [2, 2]]);
  });

  it('scalarNthRoot() - should calculate the nth root of all entries in this matrix', () => {
    const nthRootMatrix = new Matrix(2, 2).fill(8).scalarNthRoot(3);

    expect(nthRootMatrix.entries).toEqual([[2, 2], [2, 2]]);
  });

  it('scalarNthRootClone() - should create a new matrix with the nth root of all entries in this matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(8);
    const nthRootMatrix = newMatrix.scalarNthRootClone(3);

    expect(newMatrix.entries).toEqual([[8, 8], [8, 8]]);
    expect(nthRootMatrix.entries).toEqual([[2, 2], [2, 2]]);
  });
});

describe('Matrix Boolean Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('isSquare() - should check if this matrix is a Square matrix', () => {
    expect(matrix.fill(0).isSquare()).toBe(true);
    expect(new Matrix(3, 7).fill(0).isSquare()).toBe(false);
  });

  it('isSameSizeAs() - should check if this matrix has the same size as another matrix', () => {
    expect(matrix.fill(0).isSameSizeAs(new Matrix(2, 2))).toBe(true);
    expect(matrix.fill(0).isSameSizeAs(new Matrix(2, 10))).toBe(false);
  });
});

describe('Matrix Static Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('Matrix.transpose() - should return transpose of a matrix', () => {
    const rows = 3, cols = 2;
    const newMatrix = new Matrix(rows, cols).fill(0).set([, 0], 100);
    const matrixTranspose = Matrix.transpose(newMatrix);

    expect(matrixTranspose.entries).toEqual([[100, 100, 100], [0, 0, 0]]);
    expect(matrixTranspose.rows).toEqual(cols);
    expect(matrixTranspose.cols).toEqual(rows);

    expect(newMatrix.rows).toEqual(rows);
    expect(newMatrix.cols).toEqual(cols);
  });

  it('Matrix.dimsEqual() - should check equality of dimensions for all passed matrices', () => {
    const newMatrix = new Matrix(3, 2).fill(2);

    expect(Matrix.dimsEqual(matrix, matrix, matrix)).toBe(true);
    expect(Matrix.dimsEqual(matrix, matrix, newMatrix)).toBe(false);
  });

  it('Matrix.add() - should add all passed matrices', () => {
    const newMatrix = new Matrix(2, 2).fill(10);

    expect(Matrix.add(newMatrix, newMatrix, newMatrix).entries).toEqual([[30, 30], [30, 30]]);
  });

  it('Matrix.subtract() - should subtract all passed matrices', () => {
    const newMatrix = new Matrix(2, 2).fill(10);

    expect(Matrix.subtract(newMatrix.clone().fill(100), newMatrix, newMatrix).entries).toEqual([[80, 80], [80, 80]]);
  });

  it('Matrix.scalarSquare() - should create a new matrix with the square of all entries in another matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(2);
    const squareMatrix = Matrix.scalarSquare(newMatrix);

    expect(newMatrix.entries).toEqual([[2, 2], [2, 2]]);
    expect(squareMatrix.entries).toEqual([[4, 4], [4, 4]]);
  });

  it('Matrix.scalarNthPower() - should create a new matrix with the nth power of all entries in another matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(2);
    const nthPowerMatrix = Matrix.scalarNthPower(newMatrix, 3);

    expect(newMatrix.entries).toEqual([[2, 2], [2, 2]]);
    expect(nthPowerMatrix.entries).toEqual([[8, 8], [8, 8]]);
  });

  it('Matrix.scalarSqrt() - should create a new matrix with the square-root of all entries in another matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(4);
    const sqrtMatrix = Matrix.scalarSqrt(newMatrix);

    expect(newMatrix.entries).toEqual([[4, 4], [4, 4]]);
    expect(sqrtMatrix.entries).toEqual([[2, 2], [2, 2]]);
  });

  it('Matrix.scalarNthRoot() - should create a new matrix with the nth root of all entries in another matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(8);
    const nthRootMatrix = Matrix.scalarNthRoot(newMatrix, 3);

    expect(newMatrix.entries).toEqual([[8, 8], [8, 8]]);
    expect(nthRootMatrix.entries).toEqual([[2, 2], [2, 2]]);
  });

  it('Matrix.eye() - should create identity matrix', () => {
    expect(Matrix.eye(2).entries).toEqual([[1, 0], [0, 1]]);
  });

  it('Matrix.randDiag() - should create a random diagonal matrix', () => {
    const randDiagMatrix = Matrix.randDiag(2);

    // console.log(randDiagMatrix.entries);
    expect(randDiagMatrix.rows).toEqual(2);
    expect(randDiagMatrix.cols).toEqual(2);

    // todo: add more tests
  });

  it('Matrix.random() - should create a matrix with random entries between min and max', () => {
    const randomMatrix = Matrix.random(2, 2, 1, 10);
    expect(randomMatrix.rows).toEqual(2);
    expect(randomMatrix.cols).toEqual(2);
    expect(randomMatrix.max().value).toBeLessThanOrEqual(10);
    expect(randomMatrix.min().value).toBeGreaterThanOrEqual(1);

    // todo: add more tests here
  });
});

describe('Other Matrix Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('sum() - should sum a particular row, column or entire matrix', () => {
    expect(matrix.fill(0).setMatrix([[1, 2], [3, 4]]).sum([])).toEqual(10);
    expect(matrix.fill(0).setMatrix([[1, 2], [3, 4]]).sum([1,])).toEqual(7);
    expect(matrix.fill(0).setMatrix([[1, 2], [3, 4]]).sum([, 1])).toEqual(6);
  });

  it('rowMeans() - should return a matrix of row means', () => {
    const m1 = new Matrix(2, 2).fill(1);
    const m2 = new Matrix(4, 4).setMatrix([
      [3, 5, 1, 3],
      [4, 8, 2, 2],
      [4, 5, 1, 10],
      [5, 3, 10, 2]
    ]);

    const rowMeans1 = m1.rowMeans();
    const rowMeans2 = m2.rowMeans();

    expect(rowMeans1.entries).toEqual([[1], [1]]);
    expect(rowMeans2.entries).toEqual([[3], [4], [5], [5]]);
  });

  it('colMeans() - should return a matrix of column means', () => {
    const m1 = new Matrix(2, 2).fill(1);
    const m2 = new Matrix(4, 4).setMatrix([
      [3, 5, 1, 3],
      [4, 8, 2, 2],
      [4, 5, 1, 10],
      [5, 3, 10, 2]
    ]);

    const rowMeans1 = m1.colMeans();
    const rowMeans2 = m2.transpose().colMeans();

    expect(rowMeans1.entries).toEqual([[1, 1]]);
    expect(rowMeans2.entries).toEqual([[3, 4, 5, 5]]);
  });

  it('cbind() - should combine matrices horizontally', () => {
    const m1 = new Matrix(4, 1).fill(2);
    const m2 = new Matrix(4, 2).fill(10);

    const combinedMatrix = m1.cbind(m2);

    expect(combinedMatrix.entries).toEqual(
      [
        [2, 10, 10],
        [2, 10, 10],
        [2, 10, 10],
        [2, 10, 10]
      ]
    );
  });

  it('rbind() - should combine matrices vertically', () => {
    const m1 = new Matrix(2, 2).fill(2);
    const m2 = new Matrix(2, 2).fill(10);

    const combinedMatrix = m1.rbind(m2);

    expect(combinedMatrix.entries).toEqual(
      [
        [2, 2],
        [2, 2],
        [10, 10],
        [10, 10]
      ]
    );
  });

  it('transpose() - should transpose matrix', () => {
    const rows = 3, cols = 2;
    const newMatrix = new Matrix(rows, cols).fill(0).set([, 0], 100);
    const matrixTranspose = newMatrix.transpose();

    expect(matrixTranspose.entries).toEqual([[100, 100, 100], [0, 0, 0]]);
    expect(matrixTranspose.rows).toEqual(cols);
    expect(matrixTranspose.cols).toEqual(rows);

    expect(newMatrix.rows).toEqual(cols);
    expect(newMatrix.cols).toEqual(rows);
  });

  it('transposeClone() - should transpose original matrix and return a new one', () => {
    const rows = 3, cols = 2;
    const newMatrix = new Matrix(rows, cols).fill(0).set([, 0], 100);
    const matrixTranspose = newMatrix.transposeClone();

    expect(matrixTranspose.entries).toEqual([[100, 100, 100], [0, 0, 0]]);
    expect(matrixTranspose.rows).toEqual(cols);
    expect(matrixTranspose.cols).toEqual(rows);

    expect(newMatrix.rows).toEqual(rows);
    expect(newMatrix.cols).toEqual(cols);
  });

  it('min() - should get the first minimum of this matrix', () => {
    expect(new Matrix(2, 2).setMatrix([[1, 2], [3, 4]]).min()).toEqual({
      value: 1,
      index: [0, 0]
    });
  });

  it('max() - should get the first maximum of this matrix', () => {
    expect(new Matrix(2, 2).setMatrix([[1, 2], [3, 4]]).max()).toEqual({
      value: 4,
      index: [1, 1]
    });
  });

  it('clone() - deep-clone this matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(3);
    const cloneMatrix = newMatrix.clone();

    expect(cloneMatrix.entries).toEqual([[3, 3], [3, 3]]);
    expect(newMatrix.entries === newMatrix.entries).toBe(true);
    expect(newMatrix.entries === cloneMatrix.entries).not.toBe(true);
  });
});
