
function sum(...nums) {
  if (nums.length === 1 && Array.isArray(nums[0])) {
    nums = [...nums[0]];
  }
  return nums.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));

