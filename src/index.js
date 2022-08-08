module.exports = function check(str, bracketsConfig) {
  let array = bracketsConfig.map(x => x.join(''));
  let i = 0;
  while (i < array.length) {
    if (str.indexOf(array[i]) != -1) {
      str = str.replace(array[i], '');
      i = 0;
    } else {
      i++;
    }
  }
    return (str.length === 0);
}
