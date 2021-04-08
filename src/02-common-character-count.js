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
  const s1Obj = {};
  const s2Obj = {};
  let result = 0;

  s1.split('').forEach((char) => {
    s1Obj[char] = s1.split('').filter((c) => c === char).length;
  });

  s2.split('').forEach((char) => {
    s2Obj[char] = s2.split('').filter((c) => c === char).length;
  });

  Object.keys(s1Obj).forEach((key) => {
    if (has.call(s2Obj, key)) {
      result += Math.min(s1Obj[key], s2Obj[key]);
    }
  });

  return result;
}

module.exports = getCommonCharacterCount;
