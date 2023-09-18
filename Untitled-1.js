function makeSum(target, arr) {
  // Sort the array in descending order
  arr.sort((a, b) => b - a);

  const result = [];
  let sum = 0;
  let index = 0;

  while (sum < target && index < arr.length) {
    if (sum + arr[index] <= target) {
      result.push(arr[index]);
      sum += arr[index];
    }
    index++;
  }

  if (sum === target) {
    return result;
  } else {
    return "Cannot make the target sum with the given array";
  }
}

const arr = [12, 11, 10, 5, 3, 2, 1];
const target = 16;
const result = makeSum(target, arr);

console.log(result);
