// count number of Truthy and Falsy values in an Array
// Returns number of Truthy values in the array
// List of Falsy values
// - undefined
// - null
// - ''
// - false
// - 0
// - NaN

function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value)
    count++;
    return count;
}
console.log(countTruthy([1, 2, 3]));
