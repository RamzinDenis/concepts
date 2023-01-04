/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subStr = "";
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (subStr.includes(s[i])) {
      max = Math.max(max, subStr.length);
      subStr = subStr.substring(subStr.indexOf(s[i]) + 1);
    }

    subStr += s[i];
  }

  return Math.max(max, subStr.length);
};

console.log(lengthOfLongestSubstring("dvdf"));
