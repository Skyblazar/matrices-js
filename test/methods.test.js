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
});
