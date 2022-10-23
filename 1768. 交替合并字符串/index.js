/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

function merge(word1, word2, str) {
  console.log(word1, word2, str);
  if (word1 == "") return str + word2;
  if (word2 == "") return str + word1;

  str = str + word1[0] + word2[0];

  var res = merge(word1.slice(1), word2.slice(1), str);

  return res;
}

var mergeAlternately = function (word1, word2) {
  var res = merge(word1, word2, "");

  return res;
};
