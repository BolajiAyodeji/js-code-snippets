const numbers = [1, -1, 2, 3];

// checks if all numbers are positive
let allPositive = numbers.every(function(value) {
return value >= 0;
})
console.log(allPositive); // would return false

// checks if at least one number is positive
let atLeastOnePositive = numbers.some(function(value) {
  return value >= 0;
  })
  console.log(atLeastOnePositive); // would return true
