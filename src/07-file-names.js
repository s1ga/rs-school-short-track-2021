/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const getCount = (arr, value, length) => {
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (arr[i] === value) {
        count++;
      }
    }

    return count - 1;
  };

  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names.length === 0) {
      return names;
    }

    const oldCount = getCount(names, names[i], i + 1);
    const newName = oldCount === 0 ? names[i] : `${names[i]}(${oldCount})`;
    const newCount = getCount(newNames, newName, newNames.length) + 1;
    newNames.push(newCount === 0 ? newName : `${newName}(${newCount})`);
  }

  return newNames;
}

module.exports = renameFiles;
