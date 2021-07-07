var removeDuplicates = function (nums) {
  let unique = [...new Set(nums)];
  for (let i = 0; i < unique.length; i++) {
    nums[i] = unique[i];
  }
  return unique.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);