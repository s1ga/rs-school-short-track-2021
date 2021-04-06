/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;

  n.toString().split('').forEach((_, idx) => {
    const arrayNum = n.toString().split('');
    arrayNum.splice(idx, 1);
    const num = +arrayNum.join('');
    if (num > max) {
      max = num;
    }
  });

  return max;
}

module.exports = deleteDigit;
