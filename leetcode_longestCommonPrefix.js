var longestCommonPrefix = function(strs) {
  //Sort theo Aphabet, so sanh chu dau va chu cuoi
  // Neu khac thi subString tu 0 -> i
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];


};

longestCommonPrefix(["flower","flow","flight"])