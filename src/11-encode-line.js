/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let i = 0;
  let result = '';
  while (i < arr.length) {
    let count = 1;
    if (arr[i + 1]) {
      while (arr[i] === arr[i + 1]) {
        count++;
        i++;
      }
    }
    count = count === 1 ? '' : count;
    result += `${count}${arr[i]}`;
    i++;
  }

  return result;
}

module.exports = encodeLine;
