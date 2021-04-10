/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const has = Object.prototype.hasOwnProperty;
  let result = 0;
  const s1Obj = s1.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {});
  const s2Obj = s2.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }

    return acc;
  }, {});

  Object.keys(s1Obj).forEach((key) => {
    if (has.call(s2Obj, key)) {
      result += Math.min(s1Obj[key], s2Obj[key]);
    }
  });

  return result;
}

module.exports = getCommonCharacterCount;
