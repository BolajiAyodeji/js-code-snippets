const numbers = [1, 2, 3, 4];
console.log(numbers);

// remove from end
const last = numbers.pop();

// remove from start
const first = numbers.shift();

// remove middle
numbers.splice(3, 2);
console.log(numbers);
