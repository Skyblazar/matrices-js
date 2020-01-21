const Matrix = require('../index');

describe('Matrix Methods: Unit Tests', () => {
  const matrix = new Matrix(2, 2);

  it('fill() - should fill matrix with number', (done) => {
    expect(matrix.fill(3).entries).toEqual([[3, 3], [3, 3]]);

    done();
  });

  it('set() - should set the value at a particular index', (done) => {
    expect(matrix.fill(0).set([0, 0], 100).entries).toEqual([[100, 0], [0, 0]]);

    done();
  });

  it('set() - should set the values at a particular row', (done) => {
    expect(matrix.fill(0).set([1,], 100).entries).toEqual([[0, 0], [100, 100]]);

    done();
  });

  it('set() - should set the values at a particular column', (done) => {
    expect(matrix.fill(0).set([, 0], 100).entries).toEqual([[100, 0], [100, 0]]);

    done();
  });

  it('set() - should set all the values in the matrix', (done) => {
    expect(matrix.fill(0).set([], 100).entries).toEqual([[100, 100], [100, 100]]);

    done();
  });

  it('transpose() - should transpose matrix', (done) => {
    const rows = 3, cols = 2;
    const newMatrix = new Matrix(rows, cols).fill(0).set([, 0], 100);
    const matrixTranspose = newMatrix.transpose();

    expect(matrixTranspose.entries).toEqual([[100, 100, 100], [0, 0, 0]]);
    expect(matrixTranspose.rows).toEqual(cols);
    expect(matrixTranspose.cols).toEqual(rows);

    done();
  });
});
