const Matrix = require('../index');

describe('Matrix - Vector Operation Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2).fill(10);
  const largeMatrix = new Matrix(300, 300).fill(10);

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

  it('multiplyAsync() - should multiply this matrix with another matrix (this * matrix)', async () => {
    const result = await matrix.multiplyAsync(matrix);
    console.log(result.entries)
    // expect(result.entries[0].slice(0, 10)).toEqual(new Array(10).fill(1000));
  });
});