class Matrix {

  constructor(rows = 0, cols = 0) {
    this.rows = rows;
    this.cols = cols;

    /** 
     * @type {number[][]} entries 
     */
    this.entries = new Array(rows);
    this.entries.fill(new Array(cols));
  }

  /**
   * Fill matrix with a particular number
   * @param {number} num
   */
  fill(num) {
    this.entries.forEach((col) => col = col.fill(num));

    return this;
  }

  toString() {
    return `Matrix(rows: ${this.rows}, cols: ${this.cols}, entries: ${this.entries})`;
  }
}

console.log(new Matrix(4, 20).fill(2));

module.exports = Matrix;
