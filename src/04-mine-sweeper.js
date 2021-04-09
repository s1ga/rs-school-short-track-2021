/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const getCount = (arr, i, j) => {
    let count = 0;
    for (let n = -1; n <= 1; n++) {
      for (let m = -1; m <= 1; m++) {
        if (arr[i + n]) {
          count += arr[i + n][j + m] === true ? 1 : 0;
        }
      }
    }

    return count;
  };

  return matrix.map((row, i) => (
    row.map((value, j) => (value === true ? 1 : getCount(matrix, i, j)))
  ));
}

module.exports = minesweeper;
