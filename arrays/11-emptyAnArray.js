let numbers = [1, 2, 3, 4];
let another = numbers;

// solution 1
numbers = [];

// solution 2
numbers.length = 0; // most preferred method

// solution 3
numbers.splice(0, numbers.length);

// solution 4
while(numbers.length > 0) {
numbers.pop();
}

// solution 5
while(numbers.length > 0) {
  numbers.shift();
}


console.log(numbers);
