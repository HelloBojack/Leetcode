/**
 * @param {string} number
 * @return {string}
 */

var reformatNumber = function (number) {
  number = number.replaceAll(/[- ]/g, "");

  if (number.length < 4) {
    return number;
  } else if (number.length == 4) {
    return number.slice(0, 2) + "-" + number.slice(2, 4);
  } else {
    return number.slice(0, 3) + "-" + reformatNumber(number.slice(3));
  }
};
