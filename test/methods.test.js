const Matrix = require('../index');

describe('Matrix Methods: Unit Tests', () => {
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

  it('sum() - should sum a particular row, column or entire matrix', () => {
    expect(matrix.fill(0).setMatrix([[1, 2], [3, 4]]).sum([])).toEqual(10);
    expect(matrix.fill(0).setMatrix([[1, 2], [3, 4]]).sum([1,])).toEqual(7);
    expect(matrix.fill(0).setMatrix([[1, 2], [3, 4]]).sum([, 1])).toEqual(6);
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

  it('scalarSquare() - should calculate the square of all entries in this matrix', () => {
    const squareMatrix = new Matrix(2, 2).fill(2).scalarSquare();

    expect(squareMatrix.entries).toEqual([[4, 4], [4, 4]]);
  });

  it('scalarSquare() - should create a new matrix with the square of all entries in this matrix', () => {
    const newMatrix = new Matrix(2, 2).fill(2);
    const squareMatrix = newMatrix.scalarSquareClone();

    expect(newMatrix.entries).toEqual([[2, 2], [2, 2]]);
    expect(squareMatrix.entries).toEqual([[4, 4], [4, 4]]);
  });

  it('scalarNthPower() - should calculate the nth power of all entries in this matrix', () => {
    const nthPowerMatrix = new Matrix(2, 2).fill(2).scalarNthPower(3);

    expect(nthPowerMatrix.entries).toEqual([[8, 8], [8, 8]]);
  });

  it('add() - should add another matrix to this matrix', () => {
    expect(matrix.fill(0).set([], 100).add(new Matrix(2, 2).fill(100)).entries)
      .toEqual([[200, 200], [200, 200]]);
  });

  it('subtract() - should subtract another matrix from this matrix', () => {
    expect(matrix.fill(0).set([], 100).subtract(new Matrix(2, 2).fill(100)).entries)
      .toEqual([[0, 0], [0, 0]]);
  });

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

  it('isSquare() - should check if this matrix is a Square matrix', () => {
    expect(matrix.fill(0).isSquare()).toBe(true);
    expect(new Matrix(3, 7).fill(0).isSquare()).toBe(false);
  });

  it('isSameSizeAs() - should check if this matrix has the same size as another matrix', () => {
    expect(matrix.fill(0).isSameSizeAs(new Matrix(2, 2))).toBe(true);
    expect(matrix.fill(0).isSameSizeAs(new Matrix(2, 10))).toBe(false);
  });

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

  it('eye() - should create identity matrix', () => {
    expect(Matrix.eye(2).entries).toEqual([[1, 0], [0, 1]]);
  });

  it('random() - should create a matrix with random entries between min and max', () => {
    const randomMatrix = Matrix.random(2, 2, 1, 10);
    expect(randomMatrix.rows).toEqual(2);
    expect(randomMatrix.cols).toEqual(2);
    expect(randomMatrix.max().value).toBeLessThanOrEqual(10);
    expect(randomMatrix.min().value).toBeGreaterThanOrEqual(1);

    // todo: add more tests here
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
});
