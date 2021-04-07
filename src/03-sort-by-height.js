/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const idxArray = [];
  const arrayExceptOne = arr.filter((n, idx) => {
    if (n === -1) {
      idxArray.push(idx);
    }
    return n !== -1;
  });

  arrayExceptOne.sort((a, b) => a - b);
  idxArray.forEach((i) => {
    arrayExceptOne.splice(i, 0, -1);
  });

  return arrayExceptOne;
}

module.exports = sortByHeight;
