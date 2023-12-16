var minOperations = function (nums) {
  let length = nums.length;

  nums = [...new Set(nums)];

  nums.sort((a, b) => a - b);

  let end = 0;
  let max = -Infinity;

  for (start = 0; start < nums.length; start++) {
    while (nums[end] < nums[start] + length && end < length) {
      end += 1;
    }

    let candidateCount = end - start;
    max = Math.max(max, candidateCount);
  }

  return length - max;
};

nums = [1, 2, 3, 5, 6];

console.log(minOperations(nums));
