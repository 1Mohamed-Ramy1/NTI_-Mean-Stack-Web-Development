// Task 12: const array can be changed inside

const nums = [1, 2, 3];
nums.push(4);
nums[0] = 10;
console.log(nums);

try {
    nums = [5, 6, 7];
} catch (error) {
    console.log(error.message);
}
