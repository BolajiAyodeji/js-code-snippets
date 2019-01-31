const numbers = [1, 2 , 3];

// for of method
for (let number of numbers) {
  console.log(number);
}

// for each method
numbers.forEach((number, index) => console.log(index, number));
